const http = require('http')
const https = require('https')
const comments = require('./comments.json')
const todos = require('./todos.json')

const obj = {}
for (let i = 0; i < 1000; i++) {
  obj[i] = 'x'.repeat(1000)
}

const largeJson = (i) => {
  obj[1000] = i

  return JSON.stringify(obj)
}

const host = 'localhost'
const port = 8080

const requestListener = function (req, res) {
  console.log('req.url', req.url)
  switch (req.url) {
    case '/fixtures/service-worker.html':
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(`
        <html>
        <head>
          <title></title>
          <script>
            const makeRequest = () => {
              fetch(\`/1mb?j=${Math.random()}\`).then((response) => {
                document.getElementById('output').innerText = 'done'
              }).catch(() => {})
            }

            navigator.serviceWorker.register('/fixtures/service-worker.js')
            .then((registration) => {
              const serviceWorker = registration.installing || registration.waiting
              if (serviceWorker) {
                let controllerChangeCalled = false
                navigator.serviceWorker.addEventListener('controllerchange', (e) => {
                  controllerChangeCalled = true
                  makeRequest()
                })

                serviceWorker.addEventListener('statechange', (e) => {
                  if (e.target.state === 'activated' && !controllerChangeCalled) {
                    // service worker activated, reload page so it can intercept requests
                    location.reload()
                  }
                })
              } else {
                makeRequest()
              }
            })
          </script>
        </head>
        <body>
          <h1>hi</h1>
          <div id="output"></div>
        </body>
        </html>

      `)
      res.end()
      break
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(`
        <html>
          <head>
            <title>Test</title>
            <script>
              for (let i = 0; i < 50; i++) {
                fetch('/' + i + '.json')
              }
            </script>
          </head>
          <body>
            <div>Home</div>
            <button>Click me</button>
            <button id="loadTodos" onclick="loadTodos()">Load todos</button>
            // <script>
            //   fetch('/comments.json')
            //     .then(function (response) {
            //       return response.json()
            //     }).then(function (json) {
            //       renderComments(json)
            //     })

            //   function renderComments(comments) {
            //     const html = '<table id="table">' + comments.map(function (comment) {
            //       return '<tr>' + Object.values(comment).map(function (value) {
            //         return '<td>' + value + '</td>'
            //       }).join('') + '</tr>'
            //     }) + '</table>'

            //     document.body.insertAdjacentHTML('beforeend', html)
            //   }
            // </script>

            <script>
              function loadTodos() {
                fetch('/todos.json')
                  .then(function (response) {
                    return response.json()
                  }).then(function (json) {
                    renderTodos(json)
                  })
              }

              function renderTodos(todos) {
                const html = '<table id="todos">' + todos.map(function (todo) {
                  return '<tr>' + Object.values(todo).map(function (value) {
                    return '<td>' + value + '</td>'
                  }).join('') + '</tr>'
                }) + '</table>'

                document.body.insertAdjacentHTML('beforeend', html)
              }
            </script>
          </body>
        </html>
      `)
      res.end()
      break
    case '/comments.json':
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.write(JSON.stringify(comments))
      res.end()
      break
    case '/todos.json':
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.write(JSON.stringify(todos))
      res.end()
      break
    case req.url.match(/.*1mb/)?.input:
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.write('X'.repeat(1024 * 1024))
      res.end()
      break
    case req.url.match(/.*\.json/)?.input:
      const match = req.url.match(/\/(.*)\.json/)
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.write(largeJson(match[1]))
      res.end()
      break
  }
}

const server = https.createServer(requestListener)
server.listen(8081, host, () => {
  console.log(`Server is running on https://${host}:8081`)
})

const requestListener2 = function (req, res) {
  console.log('req.url', req.url)
  
  res.writeHead(302, { 'Content-Type': 'application/json' })
  res.header('Location', 'https://localhost:8081')
  res.end()
}

const server2 = http.createServer(requestListener2)

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
