const http = require('http');

const server =  http.createServer((req, res) => {
res.status = 200;
res.setHeader('content-type', 'text/plain');
res.end('Hello World made by Luis');
});

server.listen(3000, () => {
    console.log('server is running on port 3000');
});