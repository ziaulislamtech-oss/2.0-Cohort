import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [username,setUsername] = useState('')
  const [num,setNum] = useState(0)
  const getData =async() =>{
    const resoponse = await axios.get('https://randomuser.me/api/')
    console.log()
    setUsername(resoponse.data.results[0].name.first , + " " + resoponse.data.results[0].name.last)
    
  }
  useEffect(function(){
    getData()
  },[num])

  
  return (

    <div>
     <h2> hello {username}</h2>
     <h3>{num}</h3>
     <button onClick={()=> setNum(num+1)}>change Num</button>
    </div>
  )
}

export default App
