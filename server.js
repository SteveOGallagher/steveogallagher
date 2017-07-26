var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var request = require('request');
var port = (process.env.PORT || 5000);
var AWS = require('aws-sdk');
AWS.config.update({region:'us-west-2'});

app.set('port', port);

/* Setup Routing */
app.get('/', function(req, res) {
  res.sendFile('dist/index.html', {
    root: __dirname
  });
}); 
app.get('/style.css', function(req, res) {
  res.sendFile('dist/style.css', {
     root: __dirname
  });
});
app.get('/index_bundle.js', function(req, res) {
  res.sendFile('dist/index_bundle.js', {
     root: __dirname
  });
}); 

/* Handle client connections */
io.on('connection', function(socket) {

  socket.on ('generateEmail', function (data) {

      console.log("data being sent to AWS: ");
      console.log(data);

      var stepfunctions = new AWS.StepFunctions();

      var params = {
        stateMachineArn: 'arn:aws:states:us-west-2:628002381628:stateMachine:Complete-Email-Workflow-Example', /* required */
        input: data,
        name: 'Attempt1'
      };

      stepfunctions.startExecution(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
      });

      // var options = {
      //   url: 'https://states.us-west-2.amazonaws.com',
      //   method: 'GET',
      //   body: '',
      //   headers: {
      //     "input": data,
      //      "name": "Attempt1",
      //      "stateMachineArn": "arn:aws:states:us-west-2:628002381628:stateMachine:Complete-Email-Workflow-Example"
      //   }
      // };
     
      // function callback(error, response, body) {
      //   if (!error && response.statusCode == 200) {
      //     var info = JSON.parse(body);
      //     console.log(info);
      //   }
      // }

      // request(options, callback);
  });
});

http.listen(port, function() {
  console.log('App is running on localhost: ' + port);
});
