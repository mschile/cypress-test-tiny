const http = require('http')
const fs = require('fs')
const path = require('path')

const host = 'localhost'
const port = 8080

const requestListener = function (req, res) {
  switch (req.url) {
    case '/upload':
      req.pipe(fs.createWriteStream(path.join(__dirname, '..', 'downloads', 'uploaded_users.tar.gz')))
      req.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('upload success')
      })
      break
  }
}

const server = http.createServer(requestListener)

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
