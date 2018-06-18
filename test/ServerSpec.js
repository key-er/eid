const expect = require('chai').expect;
const request = require('request')
const db = require('../server/db/index.js')
// const save = db.save;
// const query = db.query;


describe('Database', function() {
  xit('should save in db', () => {
    let document = {
      "word":"arcane",
      "examples":["the arcane world of the legal profession"],
      "synonyms":["mysterious","secret","hidden","concealed","covert","clandestine","enigmatic","dark"],
      "antonyms":["well known","open"]
    }

    db.save(document)

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