const express = require('express');
// const models = require('./models/index.js');
const models = require('../helpers/oxfordAPI.js')
const searchLexicon = models.searchLexicon;


let app = express();

app.use(express.static(__dirname + '/../client/dist'));

/// Middleware for parsing request body
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/word', function(req, res) {
  console.log('came in post')
  console.log(req.body)
  searchLexicon(req.body.word, (err, data) => {
    console.log(data)
    if (err) res.status(404).send(err)
    else res.status(200).send(data)
  });


  // res.send('hey')
})

app.get('/word', function (req, res) {
  console.log('came in get')
  // models.searchLexicon(, function(err, data) {
  //   console.log(data)
  // });
});

let port = 8080;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
