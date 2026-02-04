import React, { useContext } from 'react'
import { productsDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Product = () => {
  const productData = useContext(productsDataContext)
  

  let renderData = ''
  if(productData.length > 0){
    renderData =  productData.map(function (elem, idx) {

            return <Link target='_blank' className='product' key={idx} to={`/product/${elem.id}`} >
              <div className='product'>
                <img src={elem.image} alt="" />
                <h2>{elem.title}</h2>
              </div>
            </Link>
          })
  }
  return (
    <div>
      <div className='allProducts'>
        {renderData}

      </div>
    </div>
  )
}

export default Product
