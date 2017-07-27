var React = require('react');
	ReactRouter = require('react-router'),
	Router = ReactRouter.Router,
	Route = ReactRouter.Route,
	IndexRoute = ReactRouter.IndexRoute,
	hashHistory = ReactRouter.hashHistory,
	Main = require('../components/Main')
	Intro = require('../components/Intro')
	GameContainer = require('../components/GameContainer');

var io = require('socket.io-client'),
	socket = io('https://sheltered-shore-32948.herokuapp.com');

var routes = (
	<Router history={hashHistory} >
		<Route path='/' component={Main}>
			<IndexRoute socket={socket} component={Intro} />
			<Route path='game' socket={socket} component={GameContainer} />
		</Route>
	</Router>
);

module.exports = routes;
