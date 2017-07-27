const gameBoard = require('./Board');
const settings = require('../settings.json');
const Enemy = require('./Enemy');

let lala = (() => {
// module.exports = (() => {
	let init = () => {
		createEnemy();
	};

	let createEnemy = () => {
		if (gameBoard.getIsLost()) { return; }
		if (gameBoard.getWon()) { return; }
		setTimeout(() => {
			let newEnemy = new Enemy();
			newEnemy.setId();
			newEnemy.setStart();
			gameBoard.setEnemy(newEnemy.getId(), newEnemy.getStart());
			newEnemy.move();
			createEnemy();
		}, settings.game.generateSpeed);
	};

	return {
		init: init
	};

})();

lala.init();
