import { useContext } from 'react'
import { TodoContext } from './TodoContext'

const TodoList = () => {
  const { todos, toggleTodo, removeTodo } = useContext(TodoContext)

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  )
}
