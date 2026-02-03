import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigat = useNavigate()
  return (
    <div className='footer'>
      <h3>Footer</h3>
      <button onClick={()=> navigat('/courses')}>Explore Courses</button>
    </div>
  )
}

export default Footer
