// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  // Fetch todos when the component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/api/todos')
      .then((res) => setTodos(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Add a new todo
  const addTodo = () => {
    if (!task.trim()) return;
    axios.post('http://localhost:5000/api/todos', { task })
      .then((res) => {
        setTodos([...todos, res.data]);
        setTask('');
      })
      .catch((err) => console.error(err));
  };

  // Update an existing todo
  const updateTodo = (id, newTask) => {
    axios.put(`http://localhost:5000/api/todos/${id}`, { task: newTask })
      .then((res) => {
        // Replace the updated todo in the state
        const updatedTodos = todos.map(todo => todo._id === id ? res.data : todo);
        setTodos(updatedTodos);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <h2>My To-Do List</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList todos={todos} setTodos={setTodos} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
