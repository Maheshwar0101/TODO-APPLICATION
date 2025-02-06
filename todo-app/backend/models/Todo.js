const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  task: { 
    type: String, 
    required: true 
  },
  completed: { 
    type: Boolean, 
    default: false 
  },
  // Optional field to provide additional details about the task
  description: {
    type: String,
    default: ''
  },
  // Optional due date for the task
  dueDate: {
    type: Date
  }
});

module.exports = mongoose.model('Todo', TodoSchema);
