var http = require("http"); //* --> creating a server

var server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<html><body><p>This is the home page</p></body></html>`);
    res.end();
  } else if (req.url === "/student") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<html><body><p>This is the Student page</p></body></html>`);
    res.end();
  } else if (req.url === "/admin") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<html><body><p>This is the admin page</p></body></html>`);
    res.end();
  } else if (req.url === "/data") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify({ message: `Hello There !` }));
    res.end();
  } else {
    res.end("Invalid request !");
  }
});
server.listen(3000);

console.log("Port is logged in port 127.0.0.1:3000");
