import express, { application } from 'express';


let noticias = [];
const app = express();

// Middleware
app.use(express.json());


app.get('/news', (req, res) => {
    res.send(noticias);
});



app.post('/news', (req, res) => {
    console.log('req.body', req.body);

    const noticia = req.body;

    /*
    if noticia.titulo existe
    y noticia.descripcion existe

    guarda

    else
    papi tas wey
    */

    noticias.push(noticia);

    res.send('Noticia creada');

});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});