const express = require('express');
const db = require('./db/index.js');
const api = require('../helpers/oxfordAPI.js')
const searchLexicon = api.searchLexicon;
const utils = require('../helpers/utils.js')
var query = utils.query;


let app = express();

app.use(express.static(__dirname + '/../client/dist'));

/// Middleware for parsing request body
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded




app.post('/word', function(req, res) {
  // check db first
  query({word:req.body.word})
  .then((matchedDoc) => res.status(200).send(matchedDoc[0]))
  .catch((err) => {
    if (err !== 'not found') res.status(503).send('sever internal error')
    // not found in db, call API now
    if (err === 'not found') {
      searchLexicon(req.body.word, (err, data) => {
        if (err) res.status(404).send()
        else {
          console.log('saving in db')
          db.save(data)
          res.status(200).send(data)
        }
      });
    }
  })
})



app.get('/word/:word(\\D+)/', function(req, res)  {
  console.log('came in strings get', req.url)
  console.log(req.params)
  query({word: req.params.word})
  .then(function(data) {
    console.log('inside then')
    res.status(200).send(data)
  })
  .catch((err) => res.status(404).send(err))

})



app.get('/word/:from[0-9\-]{0}/', function (req, res) {
  console.log('came in DATE get')
  console.log(req.params)
  var dateObj = new Date(req.params.from.split('-').join(','))

  query({'createdAt': {"$gte": dateObj}})
  .then((matchedDoc) => res.status(200).send(matchedDoc))
  .catch((err) => res.status(404).send(err))

});


let port = 8080;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
