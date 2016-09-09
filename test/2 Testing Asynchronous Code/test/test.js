var fs = require('fs')
var expect = require('chai').expect
const dirPath = __dirname + '/temp'
const getFilesByFileExtension = require('../lib/test-files')

describe('Test getFilesByFileExtension', function () {
  beforeEach(function () {
    fs.mkdirSync(dirPath)
    fs.writeFileSync(dirPath + '/index.html')
    fs.writeFileSync(dirPath + '/index.txt')
    fs.writeFileSync(dirPath + '/index.md')
  })
  afterEach(function () {
    fs.unlinkSync(dirPath + '/index.html')
    fs.unlinkSync(dirPath + '/index.txt')
    fs.unlinkSync(dirPath + '/index.md')
    fs.rmdirSync(dirPath)
  })
  it('should return without error', function (done) {
    getFilesByFileExtension(dirPath, 'html', function(err, files) {
      expect(files).to.deep.equal(['index.html'])
      done()
    })
  })
})
