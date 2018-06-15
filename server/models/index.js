let models = require('../../helpers/oxfordAPI.js')
let searchLexicon = models.searchLexicon;



searchLexicon('happy', function(err, data) {
  console.log(data)
})


module.exports.searchLexicon