import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList
