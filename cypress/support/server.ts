const http = require('http')

const host = 'localhost'
const port = 8080

const requestListener = function (req, res) {
  switch (req.url) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(`
        <html>
          <head>
            <script src='submit-code.js'></script>
          </head>
          <body>
            <button id="submit">Submit</button>
          </body>
        </html>
      `)
      res.end()
      break
    case '/submit-code.js':
      res.writeHead(200, { 'Content-Type': 'application/javascript' })
      res.write(`
        document.onreadystatechange = () => {
          if (document.readyState === "interactive") {
            document.getElementById('submit').addEventListener('click', function() {
              var f = document.createElement("form");
              f.method = "POST";
              f.enctype = "application/x-www-form-urlencoded";
              f.action = "/submit-form";
              f.target = "_top";
    
              document.body.appendChild(f);
              f.submit();
            })
          }
        };
      `)
      res.end()
      break
    case '/submit-form':
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(`    
        <html>
          <body>
            <div>Form Submitted Page</div>
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
