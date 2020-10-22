'use strict';

const e = React.createElement;

class likeButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {liked : false} 
	}
	render() {
		if(this.state.liked) {
			return 'You Liked this';
		}
		return e(
			'button', {onClick : ()=>this.setState({liked : true})},
			'Like'
		);
	}
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(likeButton),domContainer)