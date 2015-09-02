var express = require('express');

// create a new express server
var app = express();

app.listen(1337);
console.log('Listening on 1337');

app.get('/', function(request, response) {
  response.status(200);
  response.send('Hello world');

  console.log('Request ontvangen');
});

app.get('/test', function(request, response) {
  var parameter = request.query.param;
  response.status(200);
  response.send('Your input was ' + parameter);
});
