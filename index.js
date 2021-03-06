var express = require('express'),
    path = require('path'),
    app = express();

app.set('port', (process.env.PORT || 8100));

app.use(express.static('public'));

app.listen(app.get('port'), function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Running on port: ' + app.get('port')); }
});

// User is not authorized to perform: sts:AssumeRole on resource aws codebuild