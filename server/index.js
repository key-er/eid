const express = require('express');
const models = require('./models/index.js')
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

/// Middleware for parsing request body
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded



let port = 8898;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
