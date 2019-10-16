
const mongoose = require('mongoose')
const Task = require("../models/task.js")

module.exports = {
    index: function (req, res) {
        Task.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => res.json(err));
    },
    create: function (req, res) {
        console.log(req)
        console.log(req.body)
        const task = new Task();
        task.title = req.body.title;
        task.description = req.body.decription;
        task.completed=req.body.completed;
        task.save()
            .then(newTaskData => {
                res.json(newTaskData)
                console.log('Task created: ', newTaskData)
            })
            .catch(err => res.json(err));


    },
    show: function (req, res) {
        Task.find()
            .then(data => {
                console.log(data)
                res.render("Tasks", { Tasks: data })
            })
            .catch(err => res.json(err));
        // code...
    }
};