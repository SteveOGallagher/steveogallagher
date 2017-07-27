const settings = require('../settings.json');
const helper = require('../light/Helper');
const light = require('../light/Light');

var map = {
		"x0y0": 1,
		"x1y0": 2
	};

module.exports = (function () {
	let player = settings.game.playerStart;
	let enemies = {};
	let isLost = false;
	let won = false;

	let setEnemy = (enemy, location) => {
		console.log('-- '+enemy+' created --');
		enemies[enemy] = location;
	};

	let newGame = () => {
		player = settings.game.playerStart;
		enemies = {};
		isLost = false;
	};

	let updatePlayer = (direction) => {
		light.update(map[helper.coordinateToId(player)], false, 'player');
		switch (direction) {
			case "up" :
				player = up(player);
				break; 
			case "down" :
				player = down(player);
				break; 
			case "left" :
				player = left(player);
				break; 
			case "right" :
				player = right(player);
				break; 
		}
		light.update(map[helper.coordinateToId(player)], true, 'player');
		hasLost();
		return player;
	};

	let updateEnemy = (enemy) => {
		enemies[enemy] = left(enemies[enemy]);
		hasLost();
		return enemies[enemy];
	};

	let getIsLost = () => {
		return hasLost();
	};

	let hasLost = () => {
		for (let enemy in enemies) {
			console.log(enemy, enemies[enemy]);
			if (player[0] === enemies[enemy][0] && player[1] === enemies[enemy][1]) {
				console.log('you lose');
				// newGame();
				return true;
			}
		}
	};

	let getWon = () => {
		return hasWon();
	};

	let hasWon = () => {
		if (player[0] === settings.game.columns - 1) {
			console.log('you won');
			// newGame();
			return true;
		}		
	};

	let forward = (current, end) => {
		if (current <= end) {
			current++;
		}
		return current;
	};

	let backward = (current) => {
		if (current >= 1) {
			current--;
		}
		return current;
	};

	let down = (current) => [current[0], backward(current[1])];

	let left = (current) => [backward(current[0]), current[1]];

	let up = (current) => [current[0], forward(current[1], settings.game.rows)];

	let right = (current) => [forward(current[0], settings.game.columns), current[1]];

	return {
		setEnemy: setEnemy,
		updatePlayer: updatePlayer,
		updateEnemy: updateEnemy,
		reset: newGame,
		getIsLost: getIsLost,
		getWon: getWon
	};
})();
