const http = require('https')
const fs = require('fs')
const Stream = require('stream').Transform

var body = new Stream()

http.request(
  {
    protocol: 'https:',
    host: 'static.greatbridf.top',
    path: '/fonts/Source%20Han%20Sans/SourceHanSansSC-Regular.otf',
    encoding: null
  },
  function(response) {
    var len = response.headers['content-length']
    response.on('data', function(data) {
      body.push(data)
      console.log(len -= data.length)
    })

    response.on('end', function() {
      console.log('end! length:', body.length)
      fs.writeFileSync('SourceHanSansSC-Regular.otf', body.read())
    })
  }
).end()
