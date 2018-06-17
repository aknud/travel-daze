const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const port = 3005;

app.use(bodyParser.json());

let tasks = require('./controllers/tasksController');

app.get('/api/tasks', tasks.read)

app.post('/api/tasks', tasks.create)

app.delete('/api/tasks/:id', tasks.delete)

app.listen(port, ()=> {
    console.log(`listening on ${port}`) 
})