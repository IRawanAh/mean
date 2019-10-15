const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotes', { useNewUrlParser: true });

const QouteSchema = new mongoose.Schema({
    name: { type: String, maxlength: 20 },
    qoute: { type: String, minlength: 20 },
    date: { type: String }

})
// create an object to that contains methods for mongoose to interface with MongoDB
const Qoute = mongoose.model('Qoute', QouteSchema);
module.exports =Qoute;
