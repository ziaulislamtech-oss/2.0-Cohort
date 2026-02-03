import React, { useContext } from 'react'
import { productsDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const productData = useContext(productsDataContext)
  console.log(productData)
  const {id} = useParams()
 const selectProduct = productData.find((elem)=> id == elem.id)
  // Loading state
  if (productData.length === 0) {
    return <div>Loading products...</div>
  }
  
  // If product not found
  if (!selectProduct) {
    return <div>Product not found!</div>
  }
 console.log(selectProduct)
  // console.log(params)
  return (
    <div>
      <img src={selectProduct.image} alt="" />
      <h2>{selectProduct.title}</h2>
    </div>
  )
}

export default ProductDetails
