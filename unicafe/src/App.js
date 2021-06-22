import React, { useState } from 'react'

const Heading = ({ text }) => {
	return <h1>{text}</h1>
}

const Button = ({ handleClick, text }) => {
	return <button onClick={handleClick}>{text}</button>
}

const Statistic = ({ text, value }) => {
	return (
		<tbody>
			<tr>
				<td>{text}</td>
				<td>{value}</td>
			</tr>
		</tbody>
	)
}

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const all = good + neutral + bad

	const positive = (good / all) * 100.0

	const average = (good - bad) / all

	return (
		<div>
			<Heading text={'give feedback'} />
			<Button handleClick={() => setGood(good + 1)} text={'good'} />
			<Button
				handleClick={() => setNeutral(neutral + 1)}
				text={'neutral'}
			/>
			<Button handleClick={() => setBad(bad + 1)} text={'bad'} />
			<Heading text={'statistics'} />
			{all === 0 ? (
				<p>No feedback given</p>
			) : (
				<table>
					<Statistic text={'good'} value={good} />
					<Statistic text={'neutral'} value={neutral} />
					<Statistic text={'bad'} value={bad} />
					<Statistic text={'all'} value={all} />
					<Statistic text={'average'} value={average} />
					<Statistic text={'positive'} value={`${positive}%`} />
				</table>
			)}
		</div>
	)
}

export default App
