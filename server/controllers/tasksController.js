const taskInfo = require('./../tasks')
let id = 6


module.exports = {
    create: (req, res) => {
        id++
        taskInfo.push({ id: id, name: req.body.name });
        res.status(200).send(taskInfo)

    },
    read: (req, res) => {
        res.status(200).send(taskInfo)
    },
    delete: (req, res) => {
        // console.log(`deletingTaks with id of ${req.params.id}`)
        for (let i = 0; i < taskInfo.length; i++) {
            if (taskInfo[i].id === Number(req.params.id)) {
                taskInfo.splice(i, 1);
                return res.status(200).send(taskInfo)
            }
        }
    },
    update: (req, res) => {
        console.log(req.params, req.body)
        for (let i = 0; i < taskInfo.length; i++) {
            if (taskInfo[i].id === Number(req.params.id)) {
                taskInfo[i].name = req.body.name
            }
        } 
        
        res.status(200).send(taskInfo);
    }
}

