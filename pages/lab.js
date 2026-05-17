import Head from 'next/head';

const fonts = [
  { name: 'Alfa Slab One',     family: "'Alfa Slab One', serif",     note: 'fat slab, 70s park-poster' },
  { name: 'Bowlby One',        family: "'Bowlby One', sans-serif",   note: "cooper-black cousin, chunky rounded" },
  { name: 'Bowlby One SC',     family: "'Bowlby One SC', sans-serif",note: 'same, small caps' },
  { name: 'Bungee',            family: "'Bungee', sans-serif",       note: 'signage / national park' },
  { name: 'Bungee Shade',      family: "'Bungee Shade', sans-serif", note: 'extruded signage' },
  { name: 'Lilita One',        family: "'Lilita One', sans-serif",   note: 'cooper-black feel, rounded' },
  { name: 'Fredoka One',       family: "'Fredoka One', sans-serif",  note: 'soft rounded, friendly' },
  { name: 'Paytone One',       family: "'Paytone One', sans-serif",  note: '70s soft-rock LP cover' },
  { name: 'Sansita One',       family: "'Sansita One', sans-serif",  note: 'soft slab' },
  { name: 'Chango',            family: "'Chango', cursive",          note: 'fat outlined slab' },
  { name: 'Bevan',             family: "'Bevan', serif",             note: 'slab, condensed' },
  { name: 'Yeseva One',        family: "'Yeseva One', serif",        note: 'high-contrast 70s editorial' },
  { name: 'Ultra',             family: "'Ultra', serif",             note: 'huge bodoni, fashion-mag' },
  { name: 'Faster One',        family: "'Faster One', cursive",      note: '70s racing / disco' },
  { name: 'Monoton',           family: "'Monoton', cursive",         note: '70s neon stripes' },
  { name: 'Bungee Inline',     family: "'Bungee Inline', sans-serif",note: 'signage, inlined' },
  { name: 'Major Mono Display',family: "'Major Mono Display', monospace", note: 'geometric mono (current)' },
  { name: 'VT323',             family: "'VT323', monospace",         note: 'crt terminal' },
  { name: 'Press Start 2P',    family: "'Press Start 2P', cursive",  note: '8-bit arcade' },
  { name: 'Russo One',         family: "'Russo One', sans-serif",    note: 'industrial geometric' },
];

const familiesParam = fonts
  .map(f => f.name.replace(/ /g, '+'))
  .join('&family=');

const gfontsUrl = `https://fonts.googleapis.com/css2?family=${familiesParam}&display=swap`;

const Mark = ({ family }) => (
  <span className="mark" style={{ fontFamily: family }}>
    <span className="m">m</span>
    <span className="t">t</span>
    <span className="n">n</span>
    <span className="caret">^</span>
    <span className="c">c</span>
    <span className="o">o</span>
    <span className="d">d</span>
    <span className="e">e</span>
    <span className="s">s</span>
  </span>
);

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>mtn^codes / lab</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={gfontsUrl} />
      </Head>

      <header>
        <h1>mtn^codes — font lab</h1>
        <p className="legend">
          warm: <code>mtn</code> = fireweed&nbsp;magenta &nbsp;·&nbsp;
          accent: <code>^</code> = sun&nbsp;gold &nbsp;·&nbsp;
          cool: <code>codes</code> = glacier&nbsp;blue
        </p>
      </header>

      <main>
        {fonts.map(f => (
          <section key={f.name} className="row">
            <div className="meta">
              <div className="name">{f.name}</div>
              <div className="note">{f.note}</div>
            </div>
            <div className="sample light"><Mark family={f.family} /></div>
            <div className="sample dark"><Mark family={f.family} /></div>
          </section>
        ))}
      </main>

      <style jsx global>{`
        :root {
          --fireweed: #C81E6E;
          --glacier:  #1A9CB5;
          --sun:      #D99209;
          --snow:     #FAFAF7;
          --basalt:   #1C1C1E;
        }
        html, body {
          margin: 0;
          padding: 0;
          background: var(--snow);
          color: var(--basalt);
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;
        }
        * { box-sizing: border-box; }
        .mark {
          font-size: 3rem;
          line-height: 1;
          letter-spacing: -0.01em;
          white-space: nowrap;
          display: inline-block;
        }
        .mark .m,
        .mark .t,
        .mark .n         { color: var(--fireweed); }
        .mark .caret     { color: var(--sun); }
        .mark .c,
        .mark .o,
        .mark .d,
        .mark .e,
        .mark .s         { color: var(--glacier); }
      `}</style>

      <style jsx>{`
        .page {
          padding: 2rem 1.5rem 6rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        header h1 {
          font-family: Menlo, monospace;
          font-size: 1rem;
          letter-spacing: 0.05em;
          opacity: 0.6;
          text-transform: lowercase;
          margin: 0 0 0.25rem;
        }
        .legend {
          font-family: Menlo, monospace;
          font-size: 0.8rem;
          opacity: 0.6;
          margin: 0 0 2rem;
        }
        .legend code {
          background: rgba(0,0,0,0.05);
          padding: 0 0.25rem;
          border-radius: 3px;
        }
        .row {
          display: grid;
          grid-template-columns: 200px 1fr 1fr;
          align-items: center;
          gap: 1rem;
          padding: 1rem 0;
          border-top: 1px solid rgba(0,0,0,0.08);
        }
        .meta .name {
          font-family: Menlo, monospace;
          font-size: 0.85rem;
          font-weight: 600;
        }
        .meta .note {
          font-family: Menlo, monospace;
          font-size: 0.7rem;
          opacity: 0.55;
          margin-top: 0.2rem;
        }
        .sample {
          padding: 1.25rem 1.5rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .sample.light { background: var(--snow); border: 1px solid rgba(0,0,0,0.08); }
        .sample.dark  { background: var(--basalt); }

        @media (max-width: 800px) {
          .row { grid-template-columns: 1fr; }
          .mark { font-size: 2.25rem; }
        }
      `}</style>
    </div>
  );
}
