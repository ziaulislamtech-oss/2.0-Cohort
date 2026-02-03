import React, { useContext } from 'react'
import { userDatacontext } from '../Context/UserContext'

const Footer = () => {
  const data = useContext(userDatacontext)
  return (
    <div className='absolute bottom-0 w-screen h-10 bg-blue-700'>
      <h1>this is footer and {data}</h1>
    </div>
  )
}

export default Footer
