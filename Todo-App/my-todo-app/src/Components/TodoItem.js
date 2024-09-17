import React, { useState } from 'react'
import { createContext } from 'react'

export const TodoContext = createContext()
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([])

  // Add a new todo
  const addTodo = (todo) => {
    setTodos([...todos, todo])
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
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  )
}
