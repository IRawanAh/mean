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
app.get('/cuddles', (request, res) => {
    cat={name:"cuddles", age: 2, sleeping: ["under the bed", "under the table"], pic:"./images/cat1.jpg"}
    res.render('cat', {cat:cat});
});
app.get('/blue', (request, res) => {
    cat={name:"blue", age: 3, sleeping: ["under the bed", "under the table"],pic:"./images/cat2.jpg"}
    res.render('cat');
});
app.get('/velvet', (request, res) => {
    cat={name:"velvet", age: 1, sleeping: ["under the bed", "under the table"],pic:"./images/cat1.jpg"}
    res.render('cat');
});



app.listen(8000, () => console.log("listening on port 8000"));
