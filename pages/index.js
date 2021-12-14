import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Snowflake from "../components/svg";
import generateSnowflakeData from "../components/generate";

import defaultOptions from "../public/config.json"

const { base64encode, base64decode } = require('nodejs-base64');

export default function Home() {

  const [count, setCount] = useState(0);

  const options = generateSnowflakeData(defaultOptions);

  const snowflakeUrl = `https://snowflake.euancaskie.co.uk/snowflakes/` + encodeURIComponent(base64encode(JSON.stringify(options)))

  return (
    <div>
      <Head>
        <title>Snowflake Generator</title>
        <meta name="description" content="Generates SVG snowflakes" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Snowflake generator
        </h1>

        <div>
          <button className={styles.button} onClick={() => setCount(count + 1)} >Regenerate</button>

          <button
            className={styles.button}
            onClick={() => {
              navigator.clipboard.writeText(snowflakeUrl);
            }}
          >
            Copy link to snowflake
          </button>
        </div>


        <table>
          <tr>
            <th>Property</th>
            <th>Min</th>
            <th>Max</th>
          </tr>
          {Object.entries(defaultOptions).map(i => (
            <tr key={i}>
              <td>{i[0].toLowerCase().split('_').join(' ')}</td>
              <td>{i[1].min}</td>
              <td>{i[1].max}</td>
            </tr>
          ))}
        </table>

        <div className={styles.Snowflake}>
          <Snowflake count={count} options={options} />
        </div>
      </main>
    </div>
  )
}
