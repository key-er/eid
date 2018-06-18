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

  // check db first
  db.query({word: req.body.word})
  .then(function(matchedDoc) {
    console.log('checking in db', matchedDoc.length)
    if (matchedDoc.length === 0) throw new Error('not found')
    else res.status(200).send(matchedDoc[0])
  })
  .catch((err) => {
    console.log('fetching from api now', err)
    if (err.message === 'not found') {
      searchLexicon(req.body.word, (err, data) => {
        if (err) res.status(404).send()
        else {
          console.log('saving into db')
          db.save(data)
          res.status(200).send(data)
        }
      });
    };
  });
});

app.get('/word/:from', function (req, res) {
  console.log('came in get')
  var dateObj = new Date(req.params.from.split('-').join(','))

  db.query({'createdAt': {"$gte": dateObj}})
    .then(function(matchedDoc) {
      if (matchedDoc.length === 0) throw new Error('not found')
      else res.status(200).send(matchedDoc)
    })
  // res.send(req.params)
});

let port = 8080;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
