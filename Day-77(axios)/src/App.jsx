import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
  const [allData,setAllData] = useState();
  const getData = async ()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data)
    setAllData(response.data)
  }
  return (
    <div>
      <h1>hello</h1>
      <button onClick={getData}>Get Data</button>
      {
        allData.map(function(ele,idx){
          return <h2 key={idx}>{ele.name} </h2>
        })
      }
    </div>
  )
}

export default App
