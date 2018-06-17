const mongoose = require('mongoose')
const connection = mongoose.connection;
const mockData = require('../models/data.js')

mongoose.connect('mongodb://localhost/lex');

// connection.once('open', function() {
//   console.log('we are connected')
// })


let lexiconSchema = mongoose.Schema({
  word: String,
  antonyms: [],
  synonyms: [],
  examples: [],
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

let Thesaurus = mongoose.model('Thesaurus', lexiconSchema);


let save = function(document) {
  Thesaurus.create(document, (err, res) => {
    console.log(err, res)
  })
}

let query = function(query) {
  return Thesaurus.find(query)
}

// console.log(Thesaurus)
var testdata = { word: 'happy',
  synonyms: [ 'contented','jocular'],
  antonyms: [ 'sad' ],
  examples: [ 'Melissa came in looking happy and excited' ],
  createdAt: new Date(2017, 01, 02) }

// example save and query func usage
// console.log('****** saving....')
// save(testdata)

// query({"created": {"$gte": new Date(2018, 4, 18), "$lt": new Date(2018, 6, 17)}}).exec(function(err, matchedDoc) {
//     return matchedDoc[0]
// })



module.exports.save = save;
module.exports.query = query