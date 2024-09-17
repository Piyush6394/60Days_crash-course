import React from 'react'

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  )
}

export default TodoItem
