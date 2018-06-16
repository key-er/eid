const mongoose = require('mongoose')
const connection = mongoose.connection;

mongoose.connect('mongodb://localhost/thesaurus');

// connection.once('open', function() {
//   console.log('we are connected')
// })


let lexiconSchema = mongoose.Schema({
  word: String,
  antonyms: [],
  synonyms: [],
  examples: [],
})
