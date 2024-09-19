import axios from 'axios'

const API_URL = 'https://s3.amazonaws.com/mockapi/get-products'

export const getProducts = async (category = '', priceRange = '') => {
  const params = new URLSearchParams()
  if (category) params.append('category', category)
  if (priceRange) params.append('price', priceRange)

  const response = await axios.get(API_URL, { params })
  return response.data
}
