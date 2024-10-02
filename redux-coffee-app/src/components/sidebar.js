import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchCoffee } from '../redux/actions'

function Sidebar() {
  const dispatch = useDispatch()

  const handleSortChange = (e) => {
    dispatch(fetchCoffee(e.target.value))
  }

  return (
    <div className="sidebar">
      <h2>Sort Coffee</h2>
      <select onChange={handleSortChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  )
}

export default Sidebar
