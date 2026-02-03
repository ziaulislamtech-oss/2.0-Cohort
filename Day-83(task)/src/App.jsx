import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import ProductDetails from './Pages/ProductDetails'


const App = () => {
  const [productData,setProductData] = useState([])
  const  getData = async()=>{
    const response = await axios.get('https://fakestoreapi.com/products')
    setProductData(response.data)
    
  }
  const getFirstData = async(id)=>{
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    console.log(response.data)
  }
  useEffect(function(){
    getData()
  },[])

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Product/>} />
      <Route path='/products/:id' element={<ProductDetails/>} />
    </Routes>
  )
}

export default App
