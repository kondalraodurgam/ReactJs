import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Persons from '../compomants/Persons/Persons';
import Radium from 'radium';
import ErrorBoundary from '../compomants/ErrorBoundary/ErrorBoundary';
import Cockpit from '../compomants/Cockpit/Cockpit';


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
				{ id: "dada1", name: "Max", age: "26" },
				{ id: "adsfs2", name: event.target.value, age: "15" },
				{ id: "dadad2", name: "Kanna", age: "25" },
				{ id: "dadge1", name: "Himnhu", age: "3222" }
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

		let person = null;
		if (this.state.showPersons) {
			person =<Persons
					persons={this.state.persons}
					clicked={this.state.deletePersonHandler}
					changed={this.state.nameChangeToHandler} />

			// style.backgroundColor = "red";
			// style[':hover'] = {
			// 	backgroundColor: 'lightred',
			// 	color : 'black'
			// }
		}


		return (
			<div className="App">
				<Cockpit
					showPersons={this.state.showPersons}
					persons={this.state.persons} 
					clicked={this.togglePersonHandlor}/>
				{person}
			</div>
		)
	}
}

export default Radium(App);

