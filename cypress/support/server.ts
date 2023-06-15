const http = require("http");

const host = "localhost";
const port = 8080;

const requestListener = function (req, res) {
  switch (req.url) {
    case "/":
      if (req.method === "HEAD") {
        res.writeHead(200);
        res.end();
        return;
      }

      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        console.log('request body:', body)
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(body));
        res.end();
      });
      break;
  }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
