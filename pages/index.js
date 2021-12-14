import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Snowflake from "./_svg";

import options from "../public/config.json"

export default function Home() {

  const [count, setCount] = useState(0);

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

        <button className={styles.button} onClick={() => setCount(count + 1)} >Regenerate</button>

        <table>
          <tr>
            <th>Property</th>
            <th>Min</th>
            <th>Max</th>
          </tr>
          {Object.entries(options).map(i => (
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
