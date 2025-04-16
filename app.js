// Importazione di express
const express = require(`express`);

// Inizializzare express nella variabile app
const app = express();

// Definizione del numero di porta
const port = 3000;

// Definizione della rotta base
app.get(`/`, (req, res) => {
    console.log(`Hello World`)
})

// Inserimento del metodo che lascia in ascolto il nostro server
app.listen(port, () => {
    console.log(`Server del blog in ascolto alla porta ${port}`)
})