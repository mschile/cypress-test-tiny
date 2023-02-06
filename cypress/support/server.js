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
            <form action="/login" method="post">
              <button id="login">Login</button>
            </form>
          </body>
        </html>
      `)
      res.end()
      break
    case '/login':
      res.writeHead(302, {
        'Location': '/redirect',
        'Content-Type': 'text/html',
        'Set-Cookie': [
          'SESSION_ID=deleted; expires=Thu, 01-Jan-1970 00:00:01 GMT; Max-Age=0',
          'SESSION_ID=new_cookie_value',
          "test=deleted; expires=Thu, 01-Jan-1970 00:00:01 GMT; Max-Age=0; path=/; domain=localhost",
          "test2=deleted; expires=Thu, 01-Jan-1970 00:00:01 GMT; Max-Age=0; path=/; domain=localhost",
        ],
      })
      res.end()
      break
    case '/redirect':
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(`
        <html>
          <body>
            <div>Redirected Page</div>
            <div>${JSON.stringify(req.headers.cookie)}</div>
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
