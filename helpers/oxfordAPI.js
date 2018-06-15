const request = require('request');
const config = require('../config.js')

let options = {
  url: 'https://od-api.oxforddictionaries.com/api/v1/entries/en/happy/synonyms;antonyms',
  headers: {
      'User-Agent': 'request',
      'app_id': config.APP_ID,
      'app_key': config.APP_KEY,
    }
}




request(options, function(err, res, body) {
  if (err) console.log("ERRRR", err)
  else {
    res.send(body)
    // var jData = JSON.parse(body)
    // console.log(jData.results[0].word)
    // console.log(jData.results[0].lexicalEntries[0].entries[0].senses[0].synonyms)
    // console.log(jData.results[0].lexicalEntries[0].entries[0].senses[0].antonyms)
    // console.log(jData.results[0].lexicalEntries[0].entries[0].senses[0].examples)
  }
});
