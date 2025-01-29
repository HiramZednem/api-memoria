import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/hola/:name', (req, res) => {
    res.send(`Hola ${req.params.name}!`);
});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
})