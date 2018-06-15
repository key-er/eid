const express = require('express');
const models = require('./models/index.js')
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

/// Middleware for parsing request body
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/word', function (req, res) {
  console.log(req.body)
  res.send('hey')
})

app.get('/word', function (req, res) {

})

let port = 8080;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
