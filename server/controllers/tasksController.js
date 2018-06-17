const taskInfo = require('./../tasks')
let id = taskInfo[taskInfo.length -1].id


module.exports = {
    create: (req, res) => {
        id++
        taskInfo.push({id:id, name:req.body.name});
        res.status(200).send(taskInfo)

    },

    read: (req, res) => {
        res.status(200).send(taskInfo)
    },

    // update: (req, res) => {

    // },

    delete: (req, res) => {
        console.log(req.params)
        for (let i = 0; i < taskInfo.length; i++) {
            if (taskInfo[i].id === Number(req.params.id)) {
                taskInfo.splice(i, 1);
                return res.status(200).send(taskInfo)
            }
            return res.status(200).send('id not found');
        }
    }
}