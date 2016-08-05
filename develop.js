var express = require('express');
var app = express();

app.listen(3000, function () {
  console.log('This is the first exercise of ExercicioGitHub. Server is now running on port 3000!');

  console.log('\n\nThis is the second message.');
});

app.get('/', function (req, res) {
  res.send('This is the first exercise of ExercícioGitHub.');
});



