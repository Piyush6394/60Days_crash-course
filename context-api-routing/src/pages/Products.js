import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProductContext from '../context/ProductContext'

const Products = () => {
  const { products, loading } = useContext(ProductContext)

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
