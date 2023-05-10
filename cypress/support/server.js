const https = require('http');

setTimeout(() => {
  https.createServer({}, (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('Hello World!')
    res.end()
  }).listen(8080, () => {
    console.log('Server running at http://localhost:8080/')
  })
}, 5000)
