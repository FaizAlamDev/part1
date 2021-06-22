import React from 'react'

const course = {
	name: 'Half Stack application development',
	parts: [
		{
			name: 'Fundamentals of React',
			exercises: 10,
		},
		{
			name: 'Using props to pass data',
			exercises: 7,
		},
		{
			name: 'State of a component',
			exercises: 14,
		},
	],
}

const Header = (props) => {
	return <h1>{props.course.name}</h1>
}

const Part = (props) => {
	return (
		<p>
			{props.part.name} {props.part.exercises}
		</p>
	)
}

const Content = (props) => {
	return (
		<>
			<Part part={props.parts.parts[0]} />
			<Part part={props.parts.parts[1]} />
			<Part part={props.parts.parts[1]} />
		</>
	)
}

const Total = (props) => {
	return (
		<>
			<p>
				Number of exercises{' '}
				{props.parts.parts[0].exercises +
					props.parts.parts[1].exercises +
					props.parts.parts[2].exercises}
			</p>
		</>
	)
}

const App = () => {
	return (
		<div>
			<Header course={course} />
			<Content parts={course} />
			<Total parts={course} />
		</div>
	)
}

export default App
