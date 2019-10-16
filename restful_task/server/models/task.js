const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tasks', { useNewUrlParser: true });

const TaskSchema = new mongoose.Schema({
    title: { type: String, maxlength: 20 },
    description: { type: String, minlenth: 5 },
    completed: { type: Boolean }
}, { timestamps: true })
// create an object to that contains methods for mongoose to interface with MongoDB
const Task = mongoose.model('Task', TaskSchema);
module.exports =Task;
