var express = require('express');
var app = express();

app.use(express.static('public'));

// set the port
app.set('port', (process.env.PORT || 8080));

// start the server
app.listen(app.get('port'), function() {
    console.log('Express server listening on port', app.get('port'));
});