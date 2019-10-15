
const quotes= require("../controllers/qoutes.js")

module.exports = function (app) {
    app.get('/', (req, res) => {
        quotes.index(req, res);
    });

    app.post('/qoute', (req, res) => {
        quotes.create(req, res);
    })


    app.get('/qoutes', (req, res) => {
        quotes.show(req, res);
    })


}