const request = require('request');
const settings = require('../settings.json');
const helper = require('./Helper');

//actions
module.exports = (function () {
	
	let update = (id, on, type) => {
	  let data = {};
	  data.bri = on ? 254 : 0;
	  data.hue = type === 'player' ? settings.color.green : settings.color.red;
	  data.transitiontime = 0;
	  request(helper.buildRequest('PUT', data, id), helper.getResponse);
	};

	return {
		update: update
	}
})();
