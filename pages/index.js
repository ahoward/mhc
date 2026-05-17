import Head from 'next/head';

const Mark = () => (
  <span className="mark">
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
        <title>mtn^codes</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon.png" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap"
        />
      </Head>

      <main>
        <h1><Mark /></h1>

        <section className="manifesto">
          <p>a hacker company. radically simple. utter zen.</p>

          <p>
            one repo. one inbox. nothing required beyond getting access to
            this repo &mdash; get added, get the key, go.
          </p>

          <p>
            we build cutting-edge software for smbs that have never built
            software. a stop-loss against the firms that would have failed
            them. one-stop ai-tech partners. the cost of doing business.
          </p>

          <p>
            a collective. flat. distributed. lightweight. you book half a
            person per month, in half-month chunks, paid half up front and
            half at the end. no exceptions. no overhead. estimates in
            person-units and wallclock time, with min and max. proposals
            ship as working mvps you may take to the next firm.
          </p>

          <p>
            spun from <a href="https://dojo4.com">dojo4</a> cloth, rewoven
            in the mountains of alaska and colorado. deep dev for
            think-tanks, p.e., and .gov. no <span className="vcevil">#vcevil</span>.
            not accepting clients until march 2027.
          </p>

          <p className="contact">
            <a href="mailto:hello@mountainhigh.codes">hello@mountainhigh.codes</a>
          </p>
        </section>
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
          font-family: 'Major Mono Display', Menlo, Monaco, monospace;
          font-size: 16px;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        * { box-sizing: border-box; }
        a {
          color: var(--glacier);
          text-decoration: none;
          border-bottom: 1px solid currentColor;
        }
        a:hover, a:focus { color: var(--fireweed); }

        .mark {
          font-family: 'Major Mono Display', Menlo, monospace;
          font-weight: 400;
          letter-spacing: -0.02em;
          line-height: 1;
          white-space: nowrap;
        }
        .mark .m,
        .mark .t,
        .mark .n     { color: var(--fireweed); }
        .mark .caret { color: var(--sun); }
        .mark .c,
        .mark .o,
        .mark .d,
        .mark .e,
        .mark .s     { color: var(--glacier); }
      `}</style>

      <style jsx>{`
        .page {
          max-width: 42rem;
          margin: 0 auto;
          padding: 4rem 1.5rem 6rem;
        }
        h1 {
          margin: 0 0 3rem;
          font-size: clamp(2.5rem, 9vw, 5rem);
          font-weight: 400;
        }
        .manifesto {
          font-family: 'Major Mono Display', Menlo, monospace;
          font-size: clamp(0.85rem, 1.6vw, 1rem);
          letter-spacing: 0.01em;
        }
        .manifesto p {
          margin: 0 0 1.4rem;
        }
        .manifesto p.contact {
          margin-top: 3rem;
          font-size: 1.1em;
        }
        .vcevil {
          color: var(--fireweed);
        }
      `}</style>
    </div>
  );
}
