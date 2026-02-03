import React, { useContext } from 'react'
import { userDatacontext } from '../Context/UserContext'

const Navbar = (props) => {
  const data = useContext(userDatacontext)
  console.log(data)
  return (
    <div className='h-10 w-full bg-emerald-600'>
      <h1>{data}</h1>
    </div>
  )
}

export default Navbar
