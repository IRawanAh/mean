const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (request, response) => {
    response.send("hi");
    
});

app.get('/cars', (request, res) => {
    res.render('cars');
});

app.get('/cats', (request, res) => {
    res.render('cats');
});

app.get('/cars/new', (request, res) => {
    res.render('new');
});


app.listen(8000, () => console.log("listening on port 8000"));
