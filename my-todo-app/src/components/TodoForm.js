import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (todoText.trim()) {
      addTodo(todoText)
      setTodoText('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default TodoForm
