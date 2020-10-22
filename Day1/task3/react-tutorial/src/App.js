import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	render() {
			return (
			<div className = "App">
					<h1>Hi, am Creating React Js App</h1>
					<h1>
						Another h1 Tag is  created
					</h1>
					<Person/>
			</div>
			
			)
			// return React.createElement('div',{className : 'App'},null,React.createElement('h1',{className:'text-color'},null,'Hey Am Creating App!!!!'))
	}

}


// function App() {
//   return (
//     <div className="App">
//       <h1>Hi Kondal</h1>
//     </div>
//   );
// }

export default App;
