const http = require('http')
const url = require("url")

const host = 'localhost'
const port = 8080

const requestListener = function (req, res) {
  console.log(req.url)

  const parsed = url.parse(req.url, true)

  switch (parsed.pathname) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <title>Insert title here</title>
          </head>
          <body>
            <form action ='add'>
              Enter number 1 : <input id="num1" type ='text' and name ="num1"><br>
              Enter number 2 : <input id="num2" type ='text' and name ="num2"><br>
              <button type="submit">next</button>
            </form>
          </body>
        </html>
      `)
      res.end()
      break
    case '/add':
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(`
        <!DOCTYPE html>
        <html>
          <body>
            ${JSON.stringify(parsed.query)}
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
