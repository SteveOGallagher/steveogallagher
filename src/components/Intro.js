var React = require('react'),
	ReactRouter = require('react-router'),
	Link = ReactRouter.Link,
	queueIndex;

var Intro = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	
	componentWillMount: function() {
		this.props.route.socket.on('PlayerConnected', function(data){
			queueIndex = data;
		});
	},

	handleClick: function() {
		this.context.router.push({
			pathname: '/game',
			query: {
				id: queueIndex
			}
		})
	},

	render: function() {
		return (
			<h2 className='coming-soon'>Website Coming Soon!</h2>
		)
	}
});

module.exports = Intro;