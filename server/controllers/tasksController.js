const taskInfo = require('./../tasks')


module.exports = {
    create: (req, res) => {

    },

    read: (req, res) => {
        res.status(200).send(taskInfo)
    },

    update: (req, res) => {

    },

    delete: (req, res) => {

    }
}