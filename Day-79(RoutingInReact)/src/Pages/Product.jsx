import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <h1 className='text-3xl underline font-bold'> Product Page</h1>  
        <Link className='underline text-blue-500' to='/product/men'>Mens collection</Link>
        <Link to='/product/women'>Wommen Collection</Link>
    </div>
  )
}

export default Product
