import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const title = 'mtn^codes';
  const html_title = 'mtn <span style="color:#FF69B4;">^</span> codes';

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          <a href="." dangerouslySetInnerHTML={{__html:html_title}}></a>
        </h1>

        <p>
          <code>
            a stealth, minimalist, fast-and-light digital agency for mountain lovers
            spun from from <a target="_blank" href="https://www.dojo4.com/team/ara-howard">dojo4</a> cloth, and rewoven in <a target="_blank" href="https://mtf-trek.com">the matanuska valley</a>
          </code>
        </p>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
