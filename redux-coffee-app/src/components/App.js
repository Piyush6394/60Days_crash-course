import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CoffeeList from './CoffeeList'
import sidebar from './sidebar'
import { fetchCoffee } from '../redux/actions'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCoffee('asc')) // Default sorting order
  }, [dispatch])

  return (
    <div className="app">
      <sidebar />
      <CoffeeList />
    </div>
  )
}

export default App
