import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <NavLink
        to='/'
       className={({isActive})=>{
        color : isActive ? 'green' : ''
       }}
      >
        Home
      </NavLink>
      <NavLink to='/about' >
        About
      </NavLink>
      <NavLink
        to='/courses'
      >
        Courses
      </NavLink>

    </div>
  )
}

export default Navbar
