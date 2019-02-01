const express = require('express');
const hbs = require('hbs');

var app = express();
//for running hbs footer
//nodemon server.js -e js,hbs
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getUTCFullYear()
});

hbs.registerHelper('screamIt', (text) => {
   return text.toUpperCase();
});

//app.get('/',(req, res) => {
//    //res.send('<h1>Hello Express!</h1>');
//    res.send({
//        name: 'Olgac',
//        likes: [
//            'Biking',
//            'Movies'
//        ]
//    });
//});

//app.get('/about', (req, res) => {
//    res.render('about.hbs', {
//        pageTitle: 'About Page',
//        currentYear: new Date().getFullYear()
//    });
//});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my website'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    });
});

app.get('/bad', (req, res) =>{
    res.send({
        errorMssage: 'Unable to handle request'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});