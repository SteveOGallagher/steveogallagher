var React 			= require('react'),
	PropTypes 		= React.PropTypes, 
	PlayerControls 	= require('./PlayerControls');

function GameScreen(props) {
	
	var id = parseInt(props.queue);

	if(id === 0) {
		return (
			<PlayerControls socket={props.socket}/>
		)
	}

	if(id === 1) {
		return (
			<p>You are next!</p>
		)
	}

	return (
		<p>You are #{props.queue}</p>
	)
};

GameScreen.PropTypes = {
	queue: PropTypes.string.isRequired
};

module.exports = GameScreen;