import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../services/api'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getProductDetails(id)
      setProduct(data)
      setLoading(false)
    }

    fetchProductDetails()
  }, [id])

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  )
}

export default ProductDetails
