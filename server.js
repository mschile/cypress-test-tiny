const http = require('http')

const host = 'localhost'
const port = 8080

const requestListener = function (req, res) {
  switch (req.url) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(`
        <html>
          <body>
            <div>Home</div>
          </body>
        </html>
      `)
      res.end()
      break
  }
}

const server = http.createServer(requestListener)

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
