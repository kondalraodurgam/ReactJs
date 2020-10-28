import React, { Componant } from 'react'
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';



class App extends React.Component {
	state = {
		userInput : ""
	}
	inputChangeHander = (event)=>{
		this.setState({userInput : event.target.value})
	};

	deleteHandler = (index)=>{
		let text = this.state.userInput.split('');
		text.splice(index,1);
		let updateText = text.join('');
		this.setState({userInput : updateText})
	};
	render() {
		const charList = this.state.userInput.split('').map((ch,index)=>{
			return <Char 
			character = {ch}
			key = {index}
			clicked = {()=>this.deleteHandler(index)}/>
		});
		return (
			<div className ="App">
				<ol>
					<li>Create one input label</li>
				</ol>
				<input 
					type="text"
					onChange ={this.inputChangeHander}
					value = {this.state.userInput} />
					<p>{this.state.userInput}</p>

					<Validation inputLength={this.state.userInput.length}/>
					{charList}
			</div>

		)
	}
}

export default App;

