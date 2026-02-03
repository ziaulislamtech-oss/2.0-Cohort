import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { getAllProductData } from '../api/productApi'
export const productsDataContext = createContext()
const ProductContext = ({children}) => {

   const [productData, setProductData] = useState([])
   
   const setData = async()=>{

      setProductData(await getAllProductData())
   }

  useEffect(function () {
    setData()
  }, [])

  return (
    <div>
      <productsDataContext.Provider value={productData}>
         {children}

      </productsDataContext.Provider>
    </div>
  )
}

export default ProductContext
