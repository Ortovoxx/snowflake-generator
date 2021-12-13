import { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Snowflake from "./_svg";

export default function Home() {

  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
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

        <Snowflake count={count}/>
      </main>
    </div>
  )
}
