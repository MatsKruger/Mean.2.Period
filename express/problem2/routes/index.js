var express = require('express')
var router = express.Router()
var JokeModel = require('../model/jokes')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

/* GET joke page. */
router.get('/joke', function (req, res, next) {
  res.render('joke', { joke: JokeModel.getRandomJoke() })
})

/* GET jokes page. */
router.get('/jokes', function (req, res, next) {
  res.render('jokes', { jokes: JokeModel.allJokes })
})

/* GET add joke page. */
router.get('/addjoke', function (req, res, next) {
  res.render('addjoke')
})

/* GET store mothod. */
router.post('/storejoke', function (req, res, next) {
  JokeModel.addJoke(req.body.joke)
  res.redirect('/addjoke')
})

module.exports = router
