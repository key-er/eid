const express = require('express');
const db = require('./db/index.js');
const api = require('../helpers/oxfordAPI.js')
const searchLexicon = api.searchLexicon;


let app = express();

app.use(express.static(__dirname + '/../client/dist'));

/// Middleware for parsing request body
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/word', function(req, res) {
  console.log('came in post')
  // fetch from api
  searchLexicon(req.body.word, (err, data) => {
    if (err) res.status(404).send(err)
    else {
      // save to db
      db.save(data)
      res.status(200).send(data)
    }
  });
});

app.get('/word', function (req, res) {
  console.log('came in get')
  db.query({}) // find all
});

let port = 8080;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
