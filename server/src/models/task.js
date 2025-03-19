const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    task: {
        type: String,
        required: true
    },

}, { timestamps: true, versionKey: false })

const Task = new mongoose.model('Task', taskSchema)

module.exports = Task