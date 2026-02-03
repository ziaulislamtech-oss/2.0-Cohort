import React, { createContext } from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
export const ProductDataContext = createContext()
const ProductContext = (props) => {


    const [productData, setProductData] = useState([])
    const getData = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        setProductData(response.data)

    }
    const getFirstData = async (id) => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log(response.data)
    }
    useEffect(function () {
        console.log('hello')
    }, [])

    return (
        <div>
            {
                productData.map(function () {
                    return <h1>hello</h1>
                })
            }
        </div>
    )


    return (
        <div>
           <ProductDataContext.Provider value={productData}>
            {props.children}
           </ProductDataContext.Provider>
        </div>
    )
}

export default ProductContext
