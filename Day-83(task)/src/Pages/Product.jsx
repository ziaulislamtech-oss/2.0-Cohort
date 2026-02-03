import React, { useContext } from 'react'
import { ProductDataContext } from '../Context/ProductContext'

const Product = () => {
    const productData = useContext(ProductDataContext)
  return (
    <div>
        <h1>this is product page</h1>
    </div>
  )
}

export default Product
