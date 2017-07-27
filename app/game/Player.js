const gameBoard = require('./Board');

module.exports = (function () {
// var lala = (function () {

	let move = function (direction) {
		if (direction === 'up') { return; }
		if (direction === 'down') { return; }
		gameBoard.updatePlayer(direction);
	};

	return {
		move: move
	};

})();

// function kaka(direction) {
// 	lala.move(direction);
// 	setTimeout(function () {
// 		var newDirection = direction === 'left' ? 'right' : 'left';
// 		console.log(newDirection);
// 		return kaka(newDirection);
// 	}, 1000);
// }

// kaka('left');