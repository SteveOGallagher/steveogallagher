var React 		= require('react'),
	GameScreen 	= require('./GameScreen')

var GameContainer = React.createClass({

	getInitialState: function() {
		return {
			queue: this.props.location.query.id
		}
	},

	componentWillMount: function() {
		this.props.route.socket.on('PlayerConnected', function(data){
			this.setState({
				queue: data
			})
		}.bind(this));
	},

	render: function() {
		return(
			<GameScreen 
				queue={this.state.queue} socket={this.props.route.socket}/>
		)
	}
});

module.exports = GameContainer;
