import React from 'react'
import Card from './Card'
const App = () => {
  const user = ['zia','shouaib','mubashir']
  return (
    <div>
     {
      user.map(function(ele){
        return <Card user ={ele}/>
      })
     }
    </div>
  )
}

export default App
