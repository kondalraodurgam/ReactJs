import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = props => {
	const [personState, setPersonState] = useState({
		person: [
			{ name: "Kondal", age: "26" },
			{ name: "Ammulu", age: "15" },
			{ name: "Kanna", age: "25" },
			{ name: "Anu", age: "17" }
		],
		OtherState: 'SomeOtherValue'
	});

	const [OtherState ,setOtherState] = useState("Some Other Value");
	console.log(personState,OtherState);
	const switchToHandler = () => {
		// this.state.person[0] = "James Dawson" Never ever Dont do this;
		setPersonState({
			person: [
				{ name: "Ravi", age: "26" },
				{ name: "Ammulu", age: "15" },
				{ name: "Kanna", age: "25" },
				{ name: "Himnhu", age: "3222" }
			]
		})
	}
	return (
		<div className="App">
			<h1>
				Hi, am Creating React Js App
			</h1>
			<h1>
				Another h1 Tag is  created
			</h1>
			<button onClick={switchToHandler} >Switch button</button>
			<Person name={personState.person[0].name} age={personState.person[0].age} />
			<Person name={personState.person[1].name} age={personState.person[1].age} />
			<Person name={personState.person[2].name} age={personState.person[2].age}>my Hobbies are Playing fireFree</Person>
			<Person name={personState.person[3].name} age={personState.person[3].age} />
		</div>

	)

}



export default App;

