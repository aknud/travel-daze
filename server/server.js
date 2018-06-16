const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const port = 3005;

app.use(bodyParser.json());

let tasks = require('./controllers/tasksController');
// let tasks = [
//     {
//         id: 0,
//         name: 'Laundry'
//     },
//     {
//         id: 1,
//         name:'Dishes'
//     },
//     {
//         id: 2,
//         name:'NoDB Project'
//     },
//     {
//         id: 3,
//         name:'Clean Bathroom'
//     },
//     {
//         id: 4,
//         name:'Move Stuff'
//     }
// ];


app.get('/api/tasks', tasks.read)

app.listen(port, ()=> {
    console.log(`listening on ${port}`)
})