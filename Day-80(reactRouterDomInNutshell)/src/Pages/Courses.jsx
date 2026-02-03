import React from 'react'
import { Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
     <div className="sale">
       <p>Courses is live</p>
       <p>Courses is live</p>
       <p>Courses is live</p>
       <p>Courses is live</p>
       <p>Courses is live</p>
       <p>Courses is live</p>
     </div>
      <Outlet/>
    </div>
  )
}

export default Courses
