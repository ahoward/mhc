// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// static-first: every page prerenders to html, served as worker static assets.
export default defineConfig({
  site: "https://mountainhigh.codes",
  output: "static",
  adapter: cloudflare({
    // sharp can't run on workers; optimize images at build time.
    imageService: "compile",
  }),
});
