const expect = require('chai').expect;
const request = require('request')
const db = require('../server/db/index.js')
const utils = require('../helpers/utils.js')
// const save = db.save;
// const query = db.query;


describe('Database', function() {
  it('should save in db', () => {
    console.log('is test rnjdsjdsddh')
    db.removeOne({word:'arcane'})

    request('http://localhost:8080/word/arcane', (err, res) => {
      console.log(res.body)
    })


    request('http://localhost:8080/word/arcane', (err, res) => {
      console.log(res.body)
    })

    // let document1 = {
    //   "word":"arcane",
    //   "examples":["the arcane world of the legal profession"],
    //   "synonyms":["mysterious","secret","hidden","concealed","covert","clandestine","enigmatic","dark"],
    //   "antonyms":["well known","open"]
    // }

    // let document2 = {
    //    "word" : "goad",
    //    "examples" : [ "he applied his goad energetically to the cattle's hindquarters" ],
    //    "synonyms" : [ "prod", "spiked stick", "spike", "staff", "crook", "pole", "rod" ],
    //    "antonyms" : [ "Not found" ]
    // }


    // db.save(document)

  })

  xit ('should query database', () => {

  })
})


describe('HTTP Request', function() {

  it('should start', () => {
    expect(1).to.equal(1)
  })


  xit ('should get the words', () => {
    request('http://localhost:8080/word/')

  })

  xit ('should err in non-existing word', () => {

  })

})