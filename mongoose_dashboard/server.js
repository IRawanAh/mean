const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotes', { useNewUrlParser: true });

const AnimalSchema = new mongoose.Schema({
    name: { type: String, maxlength: 20 },
    age: { type: Number },
    date: { type: String }

})
// create an object to that contains methods for mongoose to interface with MongoDB
const Animal = mongoose.model('Animal', AnimalSchema);

app.get('/', (req, res) => {
    Animal.find()
        .then(data => {
            console.log(data)
     
            res.render("index", { animals: data })
        })
        .catch(err => res.json(err));
});

app.get('/mongooses/new', (req, res) => {
    res.render("new")
})

app.get('/mongooses/:id', (req, res) => {
    Animal.find({_id: req.params.id})
    .then(data => {
        console.log(data)
 
        res.render("display", { animal: data[0] })
    })
    .catch(err => res.json(err));
})


app.get('/mongooses/edit/:id', (req, res) => {
    Animal.find({_id: req.params.id})
    .then(data => {
        console.log(data)
 
        res.render("edit", { animal: data[0] })
    })
    .catch(err => res.json(err));
}) 



app.post('/mongooses', (req, res) => {
    const animal = new Animal();
    animal.name = req.body.name;
    animal.age = req.body.age;
    animal.save()
        .then(newQouteData => console.log('qoute created: ', newQouteData))
        .catch(err => console.log(err));

    res.redirect('/');
})

app.post('/mongooses/:id', (req, res) => {

    Animal.update({_id: req.params.id}, {
        name:req.body.name,
        age:req.body.age
    }).then(data => {
        console.log(data)
 
        res.redirect('/');
    })
    .catch(err => res.json(err));
})
app.get('/mongooses/destroy/:id', (req, res) => {
    Animal.remove({_id: req.params.id})
    .then(data => {
        console.log(data)
 
        res.redirect('/');
    })
    .catch(err => res.json(err));

})


app.get('/qoutes', (req, res) => {

})




app.listen(8000, () => console.log("listening on port 8000"));