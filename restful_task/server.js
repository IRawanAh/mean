const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(express.static( __dirname + '/public/dist' ));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./server/config/routes.js')(app)
app.listen(8000, () => console.log("listening on port 8000"));