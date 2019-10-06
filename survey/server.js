const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));
const session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))


app.get('/', (request, response) => {
    response.render('index')
})


app.post('/', (request, response) => {
    request.session.value += 2;
    response.redirect('/');
})

app.post('/result', (req, response) => {
    console.log(req.body)
    response.render('result',{data: req.body})
})




app.listen(8000, () => console.log("listening on port 8000"));