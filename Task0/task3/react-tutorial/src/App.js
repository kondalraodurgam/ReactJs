import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {
	state = {
		person: [
			{ name: "Kondal", age: "26" },
			{ name: "Ammulu", age: "15" },
			{ name: "Kanna", age: "25" },
			{ name: "Anu", age: "17" }
		],
		OtherState: 'SomeOtherValue'
	}
	switchToHandler = (newName) => {
		this.setState({
			person: [
				{ name: newName, age: "26" },
				{ name: "Ammulu", age: "15" },
				{ name: "Kanna", age: "25" },
				{ name: "Himnhu", age: "3222" }
			]
		})
	}
	nameChangeToHandler = (event) => {
		this.setState({
			person: [
				{ name: "Max", age: "26" },
				{ name: event.target.value, age: "15" },
				{ name: "Kanna", age: "25" },
				{ name: "Himnhu", age: "3222" }
			]
		})
	}

	render() {
		const style = {
			backgroundColor :"white",
			font:"inherit",
			border:"1px solid blue",
			padding:"8px",
			marginBottom:"10px",
			cursor :"pointer"
		};

		return (
			<div className="App">
				<h1>
					Hi, am Creating React Js App
			</h1>
				<h1>
					Another h1 Tag is  created
			</h1>
				<button
					style ={style}
					onClick={() => this.switchToHandler('maximiliian')} >
					Switch button
					</button>
				<Person
					name={this.state.person[0].name}
					age={this.state.person[0].age} />
				<Person
					name={this.state.person[1].name}
					age={this.state.person[1].age} />
				<Person
					name={this.state.person[2].name}
					age={this.state.person[2].age}
					click={this.switchToHandler.bind(this, 'Max')}
					changed={this.nameChangeToHandler}>
					my Hobbies are Playing fireFree
			</Person>
				<Person
					name={this.state.person[3].name}
					age={this.state.person[3].age} />
			</div>
		)
	}
}

export default App;

