import React, { useState, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./List/List";




const App = () => {
	const [userInput, setUserInput] = useState("");
	const [list, setList] = useState([
		"walk the dog",
		"buy the milk",
		"learn some code"
	]);

	// userinput is controlled by the App component
	const handleChange = e => {
		setUserInput(e.target.value);
	};

	const addItem = e => {
		if (userInput !== "") {
			setList([...list, userInput]);
			setUserInput("");
		}
	};

	const removeItem = item => {
		const updatedList = list.filter(listItem => listItem !== item);
		setList(updatedList);
	};

	return (
		<Fragment>
			<List list={list} removeItem={removeItem} />
			<hr />
			<form>
				<input
					placeholder="Something that needs to be done..."
					value={userInput}
					onChange={handleChange}
				/>
				<button type="button" onClick={addItem}>
					{'Add Item'}
				</button>
			</form>
		</Fragment>
	);
}

export default App;