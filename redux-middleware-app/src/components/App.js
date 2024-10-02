import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/actions'

function App() {
  const dispatch = useDispatch()

  const addItemHandler = () => {
    dispatch(addItem({ name: 'Item 1', price: 100 }))
  }

  return (
    <div>
      <h1>Redux Middleware Example</h1>
      <button onClick={addItemHandler}>Add Item</button>
    </div>
  )
}

export default App
