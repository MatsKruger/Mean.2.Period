/* eslint-env mocha */
var expect = require('chai').expect
var request = require('request')
var jokes = require('../model/jokes')
var http = require('http')
var server
var TEST_PORT = 3456
before(function (done) {
  var app = require('../app')
  server = http.createServer(app)
  server.listen(TEST_PORT, function () {
    done()
  })
})
after(function (done) {
  server.close()
  done()
})
describe('POST: /api/joke ', function () {
  var options = {
    url: 'http://localhost:' + TEST_PORT + '/api/joke',
    method: 'POST',
    json: true,
    body: {
      joke: 'Its better to be late than to arrive ugly'
    }
  }
  it('should add a joke', function (done) {
    request(options, function (error, res, body) {
      if (error) return
      var addedJoke = body.msg
      expect(addedJoke).to.be.equal('Your joke has been submitted')
      // You should also check whether the joke actually was added to the Data-store
      done()
    })
  })
})

describe('GET: /api/joke/random ', function () {
  console.log(jokes.allJokes)
  var options = {
    url: 'http://localhost:' + TEST_PORT + '/api/joke/random',
    method: 'GET',
    json: true
  }
  it('should get a random joke', function (done) {
    request(options, function (error, res, body) {
      console.log(body)
      if (error) return
      var randomJoke = body.joke
      expect(randomJoke).to.be.oneOf(jokes.allJokes)
      // You should also check whether the joke actually was added to the Data-store
      done()
    })
  })
})

describe('GET: /api/jokes ', function () {
  var options = {
    url: 'http://localhost:' + TEST_PORT + '/api/jokes',
    method: 'GET',
    json: true
  }
  it('should get all jokes', function (done) {
    request(options, function (error, res, body) {
      if (error) return
      var randomJoke = body.jokes
      expect(randomJoke).to.deep.equal(jokes.allJokes)
      // You should also check whether the joke actually was added to the Data-store
      done()
    })
  })
})
