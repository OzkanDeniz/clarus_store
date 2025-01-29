import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Products = () => {
  const [products, setproducts] = useState([])

  const getData= async()=>{
try {
  const res = await axios.get()
} catch (error) {
  
}

  }
  return (
    <div>Products</div>
  )
}

export default Products