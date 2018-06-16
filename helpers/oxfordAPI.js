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
    console.log('res***********************' )
    console.log(res.statusCode)
    if (err || res.statusCode === 404) cb(err, null)
    else if(res.statusCode === 200){
      // var jData = JSON.parse(body)
      // var selectedBody = [{
      //   "word": jData.results[0].word,
      //   "synonyms": jData.results[0].lexicalEntries[0].entries[0].senses[0].synonyms,
      //   "antonyms": jData.results[0].lexicalEntries[0].entries[0].senses[0].antonyms,
      //   "examples": jData.results[0].lexicalEntries[0].entries[0].senses[0].examples,
      // }];
      // console.log(JSON.stringify(selectedBody))

      // cb(null, selectedBody)
      cb(null, parseData(body))

      // var jData = JSON.parse(body)
      // console.log(jData.results[0].word)
      // console.log(jData.results[0].lexicalEntries[0].entries[0].senses[0].synonyms)
      // console.log(jData.results[0].lexicalEntries[0].entries[0].senses[0].antonyms)
      // console.log(jData.results[0].lexicalEntries[0].entries[0].senses[0].examples)
    }
  });
}

module.exports.searchLexicon = searchLexicon;

let parseData = function(data) {
  var jData = JSON.parse(data)
  var basePath = jData.results[0].lexicalEntries[0].entries[0].senses[0]

  let parsedData = {
    word: jData.results[0].word,
    synonyms: [null],
    antonyms: [null],
    examples: [null],
  }


  let looper = function(d) {
    let result = [];
    for (let i = 0; i < d.length; i++) {
      result.push(d[i].text)
    }
    return result
  }

  if (basePath.synonyms) {
    parsedData.synonyms = looper(basePath.synonyms)
  }

  if (basePath.antonyms) {
    parsedData.antonyms = looper(basePath.antonyms)
  }

  if (basePath.examples) {
    parsedData.examples = looper(basePath.examples)
  }

  return parsedData
}



// searchLexicon('procrastinate', function(err, data) {
//   parseData(data)
// })
