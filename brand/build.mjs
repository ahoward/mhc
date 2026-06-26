#!/usr/bin/env node
// rasterize the canonical mtⁿ wordmark to PNG, ICO, and SVG.
// source of truth: brand/wordmark.html — rendered by headless Chrome so the
// favicon is byte-identical in glyph shape to what the browser draws on the page.

import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const ROOT   = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const BRAND  = join(ROOT, 'brand');
const PUBLIC = join(ROOT, 'public');
const SRC    = join(BRAND, 'wordmark.html');
const FONT   = join(BRAND, 'fonts', 'OverpassMono-Bold.ttf');

const RENDER = 1024;

// 1. inline the font as a data URL so headless chrome and the foreignObject SVG
//    don't depend on a relative file path or a network fetch.
const fontDataUrl = `data:font/ttf;base64,${readFileSync(FONT).toString('base64')}`;
const htmlSrc = readFileSync(SRC, 'utf8').replace(
  /url\([^)]*OverpassMono-Bold\.ttf[^)]*\)/,
  `url(${fontDataUrl})`,
);

const tmp = mkdtempSync(join(tmpdir(), 'mtn-'));
const renderHtml = join(tmp, 'wordmark.html');
// inject a wait-for-fonts script so chrome doesn't screenshot before DM Mono is ready
const instrumented = htmlSrc.replace(
  '</body>',
  `<script>
    document.fonts.ready.then(() => {
      // mark via DOM so headless can detect; also force a paint
      document.title = 'READY';
      document.body.setAttribute('data-fonts', 'ready');
    });
  </script></body>`,
);
writeFileSync(renderHtml, instrumented);
const raw = join(tmp, 'raw.png');
execFileSync('google-chrome', [
  '--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
  '--default-background-color=00000000',
  '--virtual-time-budget=10000',
  '--run-all-compositor-stages-before-draw',
  `--window-size=${RENDER},${RENDER}`,
  `--screenshot=${raw}`,
  pathToFileURL(renderHtml).href,
]);

// 2. trim transparent border, square the canvas with a margin
const trimmed = await sharp(raw).trim().toBuffer();
const meta = await sharp(trimmed).metadata();
const pad  = Math.floor(Math.max(meta.width, meta.height) / 12);
const side = Math.max(meta.width, meta.height) + pad * 2;
const master = await sharp({
  create: { width: side, height: side, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
})
  .composite([{ input: trimmed, gravity: 'center' }])
  .png()
  .toBuffer();

// 3. emit raster sizes
const sizes = [512, 256, 128, 64, 48, 32, 16];
const rasters = {};
for (const s of sizes) {
  rasters[s] = await sharp(master).resize(s, s, { kernel: 'lanczos3' }).png().toBuffer();
  writeFileSync(join(BRAND, `wordmark-${s}.png`), rasters[s]);
}

// 4. public assets
writeFileSync(join(PUBLIC, 'favicon.png'), rasters[512]);
writeFileSync(
  join(PUBLIC, 'favicon.ico'),
  await pngToIco([rasters[16], rasters[32], rasters[48], rasters[64], rasters[128], rasters[256]]),
);

// 5. foreignObject SVG — same HTML the page renders, with the font embedded
const style = htmlSrc.split('<style>')[1].split('</style>')[0];
const inner = htmlSrc.split('<body>')[1].split('</body>')[0].trim();
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<foreignObject x="0" y="0" width="512" height="512">
<div xmlns="http://www.w3.org/1999/xhtml" style="width:512px;height:512px;">
<style>${style}</style>
${inner}
</div>
</foreignObject>
</svg>
`;
writeFileSync(join(PUBLIC, 'favicon.svg'), svg);

rmSync(tmp, { recursive: true, force: true });
console.log('ok');
