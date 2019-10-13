const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotes', {useNewUrlParser: true});

const QouteSchema = new mongoose.Schema({
    name:{ type: String, maxlength: 20},
    qoute: { type: String, minlength: 20},
    date:{type:String}

   })
   // create an object to that contains methods for mongoose to interface with MongoDB
   const Qoute = mongoose.model('Qoute', QouteSchema);
   
   app.get('/', (req, res) => {  
    Qoute.find()
        .then(data => {
            console.log(data)
            res.render("index",{qoutes: data})
        })
        .catch(err => res.json(err));
});

app.post('/qoute', (req, res) =>{
    const qoute = new Qoute();
    qoute.name = req.body.name;
    qoute.qoute = req.body.qoute;
    qoute.date = new Date();
    qoute.save()
      .then(newQouteData => console.log('qoute created: ', newQouteData))
      .catch(err => console.log(err));
     
    res.redirect('/');
  })
  

app.get('/qoutes', (req, res) => {
    Qoute.find()
        .then(data => {
            console.log(data)
            res.render("qoutes",{qoutes: data})
        })
        .catch(err => res.json(err));
})




app.listen(8000, () => console.log("listening on port 8000"));