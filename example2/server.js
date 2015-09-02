var fs = require('fs');

fs.readFile('example.txt', function(err, data) {
  if (err) {
    throw err;
  }

  var text = data.toString();
  console.log(text);
});
