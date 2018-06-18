const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const port = 3005;

app.use(bodyParser.json());

let tasks = require('./controllers/tasksController');

app.get('/api/tasks', tasks.read)

app.post('/api/tasks', tasks.create)

app.delete('/api/tasks/:id', tasks.delete)

app.put('/api/tasks/:id', tasks.update)

app.listen(port, ()=> {
    console.log(`living in ${port}`) 
})