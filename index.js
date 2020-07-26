/* const http = require('http');

const server =  http.createServer((req, res) => {
res.status = 200;
res.setHeader('content-type', 'text/plain');
res.end('Hello World made by Luis');
});

server.listen(3030, () => {
    console.log('server is running on port 3030');
}); */

const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('PETICION GET RECIBIDA')
});

app.post('/about', (req, res) => {
    res.send('REQUEST POST RECIBIDA')
});
app.put('/contact', (req, res) => {
    res.send('REQUEST PUT RECIBIDA')
});

app.delete('/contact', (req, res) => {
    res.send('REQUEST DELETE RECIBIDA')
});

app.listen(3000, () => {
    console.log('app is running on port 3000');
});

