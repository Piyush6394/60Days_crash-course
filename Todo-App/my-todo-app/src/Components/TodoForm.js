import { useContext, useState } from 'react'
import { TodoContext } from './TodoContext'

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext)
  const [todoText, setTodoText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (todoText.trim()) {
      addTodo({ id: Date.now(), text: todoText, completed: false })
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
