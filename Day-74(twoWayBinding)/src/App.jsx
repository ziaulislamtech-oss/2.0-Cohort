import React from 'react'
import { useState } from 'react'

const App = () => {
  const [title,setTitle] = useState('')
  const [email,setEmail]=useState('')
  const [allUsers,setAllUsers]=useState([])
  function formHandler(e){
    e.preventDefault()
    setAllUsers([...allUsers,{title,email}])
    console.log(allUsers)
    setTitle('')
    setEmail('')
  }
  return (
    <div>
      <form onSubmit={(e)=> formHandler(e)}>
        <input onChange={(e)=> setTitle(e.target.value)} value={title} type="text" placeholder='Enter your name' />
        <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" placeholder='Enter email' />
        <button>submit</button>
      </form>
     {
      allUsers.map(function(ele,idx){
      return <div key={idx}>
        <h1 >Name : {ele.title}</h1>
        <h2 >Gamil : {ele.email}</h2>
      </div>
     })
     }
    </div>
  )
}

export default App
