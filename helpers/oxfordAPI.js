const request = require('request');
const config = require('../config.js')


function searchLexicon(word, cb) {

  let options = {
    url: `https://od-api.oxforddictionaries.com/api/v1/entries/en/${word}/synonyms;antonyms`,
    headers: {
        'User-Agent': 'request',
        'app_id': config.APP_ID,
        'app_key': config.APP_KEY,
      }
  }

  request(options, function(err, res, body) {
    if (err) cb(err, null)
    else {
      var jData = JSON.parse(body)
      var selectedBody = [{
        "word": jData.results[0].word,
        "synonyms": jData.results[0].lexicalEntries[0].entries[0].senses[0].synonyms,
        "antonyms": jData.results[0].lexicalEntries[0].entries[0].senses[0].antonyms,
        "examples": jData.results[0].lexicalEntries[0].entries[0].senses[0].examples,
      }];
      console.log(JSON.stringify(selectedBody))



      // var jData = JSON.parse(body)
      // console.log(jData.results[0].word)
      // console.log(jData.results[0].lexicalEntries[0].entries[0].senses[0].synonyms)
      // console.log(jData.results[0].lexicalEntries[0].entries[0].senses[0].antonyms)
      // console.log(jData.results[0].lexicalEntries[0].entries[0].senses[0].examples)


      cb(null, body)

      // var jData = JSON.parse(body)
      // console.log(jData.results[0].word)
      // console.log(jData.results[0].lexicalEntries[0].entries[0].senses[0].synonyms)
      // console.log(jData.results[0].lexicalEntries[0].entries[0].senses[0].antonyms)
      // console.log(jData.results[0].lexicalEntries[0].entries[0].senses[0].examples)
    }
  });
}

module.exports.searchLexicon = searchLexicon;

// searchLexicon('happy')