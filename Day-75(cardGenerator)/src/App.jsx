import React, { useState } from 'react'
import Card from './Component/Card'

const App = () => {
  const [userName, setUserName] = useState('')
  const [userRole, setUserRole] = useState('')
  const [imageURL, setImageUrl] = useState('')
  const [userDesc, setUserDesc] = useState('')
  const localData = JSON.parse(localStorage.getItem('all-users') ) || []
  console.log(localData)

  const [allUsers,setAllUsers]=useState(localData)
  function submitHandler(e){
    e.preventDefault()
   const oldUser = [...allUsers]
   oldUser.push({userName,userRole,userDesc,imageURL})
   setAllUsers(oldUser)
   localStorage.setItem('all-users',JSON.stringify(oldUser))
    
    console.log(allUsers)
    


    setUserName('')
    setUserRole('')
    setImageUrl('')
    setUserDesc('')
  
  }
function deleteItem(id){

  const copyUsers =[...allUsers]
  const conf = confirm('Are you sure to delete this card')
  if(conf){
    copyUsers.splice(id,1)
    setAllUsers(copyUsers)
    localStorage.setItem('all-users',JSON.stringify(copyUsers))
    
  }
  

}
  return (
    <div className=' p-10'>
      <h1 className='text-center font-extrabold text-4xl font-serif '>Card Generator</h1>
      <form onSubmit={(e)=> submitHandler(e)} className='flex flex-wrap items-center'>
        <input value={userName} onChange={(e)=> setUserName(e.target.value)} className='border-2 m-1 px-5 py-2 w-[45%] rounded' type="text" placeholder='Enter your name' />
        <input value={imageURL} onChange={(e)=> setImageUrl(e.target.value)} className='border-2 m-1 px-5 py-2 w-[45%] rounded' type="text" placeholder='Image URL' />
        <input value={userRole} onChange={(e)=> setUserRole(e.target.value)} className='border-2 m-1 px-5 py-2 w-[45%] rounded' type="text" placeholder='Enter role' />
        <input value={userDesc} onChange={(e)=> setUserDesc(e.target.value)} className='border-2 m-1 px-5 py-2 w-[45%] rounded' type="text" placeholder='Enter Description' />
        <button className='basis-[90%] px-3 py-3 bg-[#4F46E5] active:scale-[.9] text-white rounded-2xl'>Submit</button>

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
