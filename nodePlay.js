const http = require('http');


const server = http.createServer((req, res) => {
    res.writeHead(200,{'content-type':'text/html'})
   res.write('<h1>Hello</h1><h2>World</h2>')
   res.end()
});

const port = 8000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
