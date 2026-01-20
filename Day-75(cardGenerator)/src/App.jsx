import React, { useState } from 'react'
import Card from './Component/Card'

const App = () => {
  const [name, setname] = useState('')
  const [url, setUrl] = useState('')
  const [role, setRole] = useState('')
  const [description, setDescription] = useState('')
  const [allUsers,setAllUsers]=useState([])
  function submitHandler(e){
    e.preventDefault()
    const oldUser = [...allUsers]
    setAllUsers([...oldUser,{name,url,role,description}])
    console.log(allUsers)


    setname('')
    setUrl('')
    setRole('')
    setDescription('')
  
  }
function deleteItem(id){
  console.log('item Deleted')
  const copyUsers =[...allUsers]
  copyUsers.splice(id,1)
  console.log(copyUsers)
  setAllUsers(copyUsers)

}
  return (
    <div className=''>
      <form onSubmit={(e)=> submitHandler(e)} className='flex flex-wrap items-center'>
        <input value={name} onChange={(e)=> setname(e.target.value)} className='border-2 m-1 px-5 py-2 w-[45%] rounded' type="text" placeholder='Enter your name' />
        <input value={url} onChange={(e)=> setUrl(e.target.value)} className='border-2 m-1 px-5 py-2 w-[45%] rounded' type="text" placeholder='Image URL' />
        <input value={role} onChange={(e)=> setRole(e.target.value)} className='border-2 m-1 px-5 py-2 w-[45%] rounded' type="text" placeholder='Enter role' />
        <input value={description} onChange={(e)=> setDescription(e.target.value)} className='border-2 m-1 px-5 py-2 w-[45%] rounded' type="text" placeholder='Enter Description' />
        <button className='basis-[90%] px-3 py-3 bg-amber-200'>Submit</button>

      </form>
   <div className='flex flex-wrap gap-2 p-3'>
     {
      allUsers.map(function(ele,idx){
        return <Card elem={ele} idx={idx} deleteHandler ={deleteItem}/>
      })
    }
   </div>
    </div>
  )
}

export default App
