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
            <div>Login Page</div>
            <button id="login">Login</button>
          </body>
          <script>
            document.getElementById('login').addEventListener('click', function (e) {
              e.preventDefault()
              fetch('/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  username: 'foo',
                  password: 'bar'
                })
              })
            })
          </script>
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
