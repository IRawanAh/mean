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


const CommentSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Comments must have a name"] },
    content: { type: String, required: [true, "Commentss must have content"] },
}, { timestamps: true })
const MessageSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Blogs must have a title"], minlength: [3, "Titles must have at least 3 characters"] },
    content: { type: String, required: [true, "Messages must have content"] },
    comments: [CommentSchema]
}, { timestamps: true })



// create an object to that contains methods for mongoose to interface with MongoDB
const Comment = mongoose.model('Comment', CommentSchema);
const Message = mongoose.model('Message', MessageSchema);

app.get('/', (req, res) => {
    Message.find()
        .then(data => {
            console.log(data)

            res.render("index", { messages: data })
        })
        .catch(err => res.json(err));
});

app.post('/message', (req, res) => {
    const message = new Message();
    message.name = req.body.name;
    message.content = req.body.message;
    message.save()
        .then(newQouteData => console.log('qoute created: ', newQouteData))
        .catch(err => console.log(err));

    res.redirect('/');
})
app.post('/comment/:id', (req, res) => {
    const comment = new Comment();
    comment.name = req.body.name;
    comment.content = req.body.content;
    comment.save()
        .then(newData => {
            console.log('comment created: ', newData)
            Message.update({ _id: req.params.id }, { $push: { comments: newData } })
                .then(data => { console.log(data) })
                .catch(err => console.log(err));
})
    .catch(err => console.log(err));

res.redirect('/');
})


app.listen(8000, () => console.log("listening on port 8000"));




