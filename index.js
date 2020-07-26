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
const morgan = require('morgan');
const app = express();

/* function logger(req, res, next){
console.log(`Route received: ${ req.protocol }://${req.get('host')}${req.originalUrl} `);
next();
} */

//---MIDDLEWARE---
app.use(express.json());
app.use(morgan('dev'));
//-----------------------


app.get('/', (req, res) => {
    res.send('hola mundo')
});
app.get('/user', (req, res) => {
    res.json({
        name: 'Luis',
        lastName: 'Vazquez',
        age: 31,
        user: 'sugus'
    })
});

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('REQUEST POST RECIBIDA')
});

app.post('/user/:id', (req, res) => {
    console.log(req.params);
    res.send('REQUEST POST RECIBIDA')
});

app.put('/user/:id', (req, res) => {
    console.log(req.body);
    res.send(`the user ${req.params.id} updated`)
});

app.delete('/user/:id', (req, res) => {
    res.send(`user ${req.params.id} deleted`)
});

app.listen(3000, () => {
    console.log('app is running on port 3000');
});

