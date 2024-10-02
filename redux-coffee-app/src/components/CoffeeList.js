import React from 'react'
import { useSelector } from 'react-redux'

function CoffeeList() {
  const coffeeList = useSelector((state) => state.coffeeList)

  return (
    <div className="coffee-list">
      {coffeeList.map((coffee) => (
        <div key={coffee.id} className="coffee-item">
          <h3>{coffee.name}</h3>
          <p>{coffee.description}</p>
        </div>
      ))}
    </div>
  )
}

export default CoffeeList
