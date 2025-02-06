const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// GET all todos
router.get('/', todoController.getTodos);

// POST a new todo
router.post('/', todoController.createTodo);

// PUT (update) a todo by ID
router.put('/:id', todoController.updateTodo);

// DELETE a todo by ID
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
