import React, { useState } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
  ])

  // Add a new todo
  const addTodo = (todoText) => {
    const newTodo = { id: Date.now(), text: todoText, completed: false }
    setTodos([...todos, newTodo])
  }

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  // Remove a todo
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  )
}

export default App
