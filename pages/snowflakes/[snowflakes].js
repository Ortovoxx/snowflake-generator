import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import Snowflake from "../../components/svg";

import { useRouter } from 'next/router'

const { base64encode, base64decode } = require('nodejs-base64');

export default function SnowflakeById() {

    const router = useRouter()
    const { snowflakes } = router.query

    let options = {
        armLength: [8],
        armStroke: 6,
        distanceFromCentre: [130],
        subBranchStroke: [5],
        subBranches: [0],
    }

    try {
        options = JSON.parse(base64decode(decodeURIComponent(snowflakes)))
    } catch (error) {
        console.log(error);
    }

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

                <div className={styles.Snowflake}>
                    <Snowflake options={options} />
                </div>
            </main>
        </div>
    )
}