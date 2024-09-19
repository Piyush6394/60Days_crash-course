import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getProducts } from '../services/api'
import ProductCard from './ProductCard'

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const category = searchParams.get('category') || ''
        const priceRange = searchParams.get('price') || ''
        const data = await getProducts(category, priceRange)
        setProducts(data)
      } catch (error) {
        setError('Error fetching products')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [searchParams])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Products
