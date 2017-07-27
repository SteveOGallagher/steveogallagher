const request = require('request');
const settings = require('../settings.json');
const helper = require('./Helper');

let lightsMap = {};

module.exports = (() => {

  let checklights = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      turnOnlights(JSON.parse(body));
    }
  };

  let turnOnlights = (lights) => {
    for(let light in lights) {
      let lightData = lights[light];
      if (!lightData.state.on) {
        request(helper.buildRequest('PUT', {on:true, bri:0, hue:settings.color.blue}, light), helper.getResponse);
        console.log(`${light}: ON`);
      }
      lightsMap[lightData.name] = light;
    }
    console.log(lightsMap);
  };

  let bootUp = () => {
    request(helper.buildRequest('GET'), checklights);
  };

  let getLightID = coordinate => lightsMap[coordinate]; 

  return {
    getLightID: getLightID,
    checklights: checklights,
    turnOnlights: turnOnlights,
    bootUp: bootUp
  };

});