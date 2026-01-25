import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'white'
        })}
      ></NavLink>
      <NavLink to='/'
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'white'
        })}
      >Home</NavLink>
      <NavLink to='/About'
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'white'
        })}
      >About</NavLink>
      <NavLink to='/Courses'
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'white'
        })}
      >Courses</NavLink>
    </div>
  )
}

export default Navbar
