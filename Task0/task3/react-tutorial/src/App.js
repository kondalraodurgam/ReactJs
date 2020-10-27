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
		OtherState: 'SomeOtherValue',
		showPersons: false
	}
	// switchToHandler = (newName) => {
	// 	this.setState({
	// 		person: [
	// 			{ name: newName, age: "26" },
	// 			{ name: "Ammulu", age: "15" },
	// 			{ name: "Kanna", age: "25" },
	// 			{ name: "Himnhu", age: "3222" }
	// 		]
	// 	})
	// }
	nameChangeToHandler = (event) => {
		this.setState({
			person: [
				{ id : "dada1",name: "Max", age: "26" },
				{ id : "adsfs2",name: event.target.value, age: "15" },
				{ id : "dadad2",name: "Kanna", age: "25" },
				{ id : "dadge1",name: "Himnhu", age: "3222" }
			]
		});
	}
	togglePersonHandlor = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};
	deletePersonHandler = (personIndex) => {
		const person = [...this.state.person];
		person.splice(personIndex, 1);
		this.setState({ person: person });
	}
	render() {
		const style = {
			backgroundColor: "white",
			font: "inherit",
			border: "1px solid blue",
			padding: "8px",
			marginBottom: "10px",
			cursor: "pointer"
		};

		let person = null;
		if (this.state.showPersons) {
			person = (
				<div>
					{this.state.person.map((person,index) => {
						return <Person
							click = {()=> this.deletePersonHandler(index)}
							name={person.name}
							age={person.age}
							key={person.id}
						/>
					})}
				</div>
			);
		}

		return (
			<div className="App">
				<h1>
					Hi, am Creating React Js App
			</h1>
				<h1>
					Another h1 Tag is  created
			</h1>
				<button
					style={style}
					onClick={this.togglePersonHandlor} >
					Toggle Persons
					</button>
				{person}
			</div>
		)
	}
}

export default App;

