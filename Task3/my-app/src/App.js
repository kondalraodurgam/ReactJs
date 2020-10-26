import React, { Componant } from 'react'
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends React.Component {
	state = {
		userName: "KondalDurgam"
	}
	userNameChangeHandler = (event) => {
		this.setState({
			userName: event.target.value
		});
	}
	render() {
		return (
			<div className="App">
				<ol>
					<li>
						Create Two new  Componant UserInput and UserOutPut
			</li>
					<li>
						UserInput should be hold an input element. UserOutput two paragraphs
			</li>
					<li>
						Output multile USEROUTPUT Componant in the app Componant(any paragrapha)
			 </li>
					<li>
						Pass a user name (of your choice ) to Uset Output via props
			 </li>
				</ol>
				<UserInput
					changed={this.userNameChangeHandler}
					currentName={this.state.userName} />
				<UserOutput userName={this.state.userName} />
				<UserOutput userName={this.state.userName} />
				<UserOutput userName="Gowtham anala" />
			</div>
		)
	}
}

export default App;
