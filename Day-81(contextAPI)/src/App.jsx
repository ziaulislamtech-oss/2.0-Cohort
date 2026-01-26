import React, { useState } from 'react'
import Navbar from './Component/Navbar'

const App = () => {

  
  const [theme,setTheme] = useState('light')

  const changeTheme=(newtheme)=>{
    console.log(newtheme)
    setTheme(newtheme)
  }

  return (
    <div>
      <h1>This is {theme}</h1>
     <Navbar changeTheme={changeTheme}/>
     
    </div>
  )
}

export default App
