const settings = require('../settings.json');
const gameBoard = require('./Board');

let Enemy = function() {
	this.start = [settings.game.columns, 0];
	this.id = 0;
};

Enemy.prototype.setStart = () => {
	if ( (Math.random() * (9 - 0) + 0) >= 5 ) {
		this.start = [settings.game.columns, 1];
	} else {
		this.start = [settings.game.columns, 0];
	}
};

Enemy.prototype.setId = () => {
	this.id = Math.floor(Math.random() * 1000);
};

Enemy.prototype.move = function() {
	if (gameBoard.getIsLost()) { return; }
	if (gameBoard.getWon()) { return; }
	
	gameBoard.updateEnemy(this.getId());

	setTimeout (function() {
		return this.move();
	}.bind(this), settings.game.moveSpeed);
};

Enemy.prototype.getStart = () => this.start;

Enemy.prototype.getId = () => this.id;

module.exports = Enemy;
