import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Snowflake from "../components/svg";

export default function Home() {

	const options = {
		STROKE: {
			min: 1,
			max: 10
		},
		SUB_BRANCHES: {
			min: 5,
			max: 100
		},
		DISTANCE_FROM_CENTRE: {
			min: 10,
			max: 200
		},
		ARM_LENGTH: {
			min: 5,
			max: 50
		}
	}

	const [discordId, setDiscordId] = useState('266241948824764416');

	let errorText = '';

	let bigIntDiscordId = 266241948824764416n;

	try {
		bigIntDiscordId = BigInt(discordId)
	} catch (error) {
		errorText = 'Please enter a valid discord id'
	}

	const bin = bigIntDiscordId.toString(2);

	console.log(bin);


	if (bin.length == 32) {
		console.log(bin);
		errorText = '';
	}
	else {
		errorText = 'Please enter a valid discord id'
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

				<label>Enter your discord id
					<input
						type="text"
						value={discordId}
						onChange={(i) => setDiscordId(i.target.value)}
					/>
				</label>
				<p>{errorText}</p>

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
					<Snowflake count={discordId} options={options} />
				</div>
			</main>
		</div>
	)
}
