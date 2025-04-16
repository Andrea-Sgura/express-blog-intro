// Importazione di express
const express = require(`express`);

// Inizializzare express nella variabile app
const app = express();

// Definizione del numero di porta
const port = 3000;

// Impostazione dello strumento per recuperare gli asset statici
app.use(express.static(`public`));

// Definizione della rotta base
app.get(`/`, (req, res) => {
    res.send(`Server del mio blog`)
})

app.get(`/bacheca`, (req, res) => {
    const bacheca = [
        {
            titolo: "Blog Animali",
            contenuto: "Un uscita al parco con il proprio animale da compagnia aiuta a rilassarsi e svuotare la mente",
            image: "imgs/blog-cani.jpg",
            tags: ["animali", "relax", "parco"]
        },

        {
            titolo: "Blog Cinema",
            contenuto: "Una volta alla settimana si va al cinema",
            image: "imgs/blog-cinema.jpg",
            tags: ["film", "serata", "divertimento"]
        },

        {
            titolo: "Blog Food",
            contenuto: "Che bello cucinare una bella cena per i miei amici",
            image: "imgs/blog-food.jpg",
            tags: ["cucina", "risate", "serata"]
        },

        {
            titolo: "Blog Musica",
            contenuto: "La mia passione è la musica, mi piace cantare e suonare la chitarra",
            image: "imgs/blog-musica.jpg",
            tags: ["sound", "divertimento", "passione"]
        },

        {
            titolo: "Blog Sport",
            contenuto: "Lo sport fa parte della mia routine, ogni giorno mi tengo in forma facendo una bella corsa",
            image: "imgs/blog-sport.jpg",
            tags: ["routine", "corsa", "dedizione"]
        }
    ]
})

// Inserimento del metodo che lascia in ascolto il nostro server
app.listen(port, () => {
    console.log(`Server del blog in ascolto alla porta ${port}`)
})