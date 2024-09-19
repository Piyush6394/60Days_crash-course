import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <Link to={`/products/${product.id}`}>View Details</Link>
    </div>
  )
}

export default ProductCard
