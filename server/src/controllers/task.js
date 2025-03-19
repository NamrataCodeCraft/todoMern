const Task = require('../models/task')

exports.createTask = async (req, res, next) => {
    try {
        const { task } = req.body
        const todo = await Task.create({ task, userId: req.user._id })
        return res.status(200).send({ status: true, message: "successfuly created todo", todo })

    } catch (err) {
        console.log('err', err)
        next(err)
    }

}

exports.getallTodo = async (req, res, next) => {
    try {
        const todo = await Task.find()
        return res.status(200).send({ status: true, message: "successfully get all task", todo })

    } catch (err) {
        console.log('err: ', err)
        next(err)
    }

}