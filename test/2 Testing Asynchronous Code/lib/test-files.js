var fs = require('fs')
var path = require('path')

const getFilesByFileExtension = function (pathName, fileExt, callback) {
  fs.readdir(pathName, function (err, files) {
    if (err) {
      return callback(err)
    }
    const filtered = files.filter(fileItem => path.extname(fileItem).substring(1) === fileExt)
    callback(null, filtered)
  })
}

module.exports = getFilesByFileExtension
