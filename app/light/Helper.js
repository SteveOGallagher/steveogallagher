const request = require('request');
const settings = require('../settings.json');

const bridge = settings.bridge.herokuIP;

module.exports = (() => {

  let buildRequest = (method, data, id, noState) => {
    let result = {},
        update = '';

    if (method === 'PUT') { 
      if (!data && !id) {
        return; 
      } else {
        result.body = JSON.stringify(data);
        update = noState ? `${id}` : `${id}/state`;
      }
    }

    result.url = `${bridge}/api/${settings.bridge.username}/lights/${update}`;
    result.method = method;
    result.headers = { 'withCredentials': false }
    return result;
  };

  let getResponse = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      let info = JSON.parse(body);
        console.log(info);
        return info;
    }
  };

  let getAllLights = () => {
    request(buildRequest('GET'), getResponse);
  };

  //[{id: 1, name: 'x0y0'}]
  let renameLight = (data) => {
    if (typeof data !== 'object') { return; }
    data.forEach( (value) => {
      request(buildRequest('PUT', {name:value.name}, value.id, true), getResponse);
    });
  };

  let coordinateToId = (coordinate) => {
    return `x${coordinate[0]}y${coordinate[1]}`;
  };

  return {
    getAllLights: getAllLights,
    buildRequest: buildRequest,
    getResponse: getResponse,
    renameLight: renameLight,
    coordinateToId: coordinateToId
  };

})();
