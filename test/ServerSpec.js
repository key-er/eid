const expect = require('chai').expect;
const request = require('request')
const db = require('../server/db/index.js')
const save = db.save;
const query = db.query;


describe('HTTP Request', function() {

  it('should start', () => {
    expect(1).to.equal(1)
  })


  xit ('should get the words', () => {

  })

  xit ('should err in non-existing word', () => {

  })

})


describe('Database', function() {

  xit('should save in db', () => {

  })

  xit ('should query database', () => {

  })
})