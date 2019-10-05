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
    if (request.session.value) {
        var num = request.session.value
    }
    else {
        request.session.value = 1
        var num = request.session.value
    }
    console.log(num)
    response.render('index', { num: num })
})


app.post('/', (request, response) => {
    request.session.value += 2;
    response.redirect('/');
})

app.post('/reset', (request, response) => {
    request.session.value = 1;
    response.redirect('/');
})




app.listen(8000, () => console.log("listening on port 8000"));