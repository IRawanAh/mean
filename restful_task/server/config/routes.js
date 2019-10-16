
const tasks= require("../controllers/tasks.js")


module.exports = function (app) {
    app.get('/tasks', (req, res) => {
        tasks.index(req, res);
    });

    app.post('/task', (req, res) => {
        tasks.create(req, res);
    })




}