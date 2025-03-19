const express = require('express')

const router = express.Router();

const { createTask, getallTodo } = require('../controllers/task')
router.post('/', createTask)
router.get('/', getallTodo)

module.exports = router