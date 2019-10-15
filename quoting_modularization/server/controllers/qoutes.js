
const Qoute= require("../models/qoute.js")

module.exports = {
    index: function(req, res) {
        Qoute.find()
        .then(data => {
            console.log(data)
            res.render("index", { qoutes: data })
        })
        .catch(err => res.json(err));
    },
    create: function(req, res) {
        const qoute = new Qoute();
        qoute.name = req.body.name;
        qoute.qoute = req.body.qoute;
        qoute.date = new Date();
        qoute.save()
            .then(newQouteData => console.log('qoute created: ', newQouteData))
            .catch(err => console.log(err));

        res.redirect('/');

    },
    show: function(req, res) {
        Qoute.find()
        .then(data => {
            console.log(data)
            res.render("qoutes", { qoutes: data })
        })
        .catch(err => res.json(err));
    	// code...
    }
};