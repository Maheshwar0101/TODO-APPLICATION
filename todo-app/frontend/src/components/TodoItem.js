// frontend/src/components/TodoItem.js
import React, { useState } from 'react';
import { FaTrash, FaEdit, FaSave, FaTimes } from 'react-icons/fa';

function TodoItem({ todo, toggleComplete, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);

  // Handle save action when editing
  const handleSave = () => {
    if (!editedTask.trim()) return;
    updateTodo(todo._id, editedTask);
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button className="icon-btn" onClick={handleSave} title="Save">
            <FaSave />
          </button>
          <button className="icon-btn" onClick={() => { setIsEditing(false); setEditedTask(todo.task); }} title="Cancel">
            <FaTimes />
          </button>
        </>
      ) : (
        <>
          <span
            className={todo.completed ? 'completed' : ''}
            onClick={() => toggleComplete(todo._id, todo.completed)}
          >
            {todo.task}
          </span>
          <button className="icon-btn" onClick={() => setIsEditing(true)} title="Edit">
            <FaEdit />
          </button>
          <button className="icon-btn" onClick={() => deleteTodo(todo._id)} title="Delete">
            <FaTrash />
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
