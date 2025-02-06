// frontend/src/components/TodoList.js
import React from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

function TodoList({ todos, setTodos, updateTodo }) {
  // Toggle the completed status for a todo
  const toggleComplete = (id, completed) => {
    axios.put(`http://localhost:5000/api/todos/${id}`, { completed: !completed })
      .then(res => {
        const updatedTodos = todos.map(todo =>
          todo._id === id ? res.data : todo
        );
        setTodos(updatedTodos);
      })
      .catch(err => console.error(err));
  };

  // Delete a todo
  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/api/todos/${id}`)
      .then(() => {
        const updatedTodos = todos.filter(todo => todo._id !== id);
        setTodos(updatedTodos);
      })
      .catch(err => console.error(err));
  };

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem 
          key={todo._id} 
          todo={todo} 
          toggleComplete={toggleComplete} 
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
