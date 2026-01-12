import React from 'react'
import Nav from './Component/Nav'
import Female from './Component/Female'
import Male from './Component/Male'

const App = () => {
  const users = [
  {
    name: "Ali Khan",
    gender: "Male",
    profession: "Web Developer"
  },
  {
    name: "Sara Ahmed",
    gender: "Female",
    profession: "UI/UX Designer"
  },
  {
    name: "Usman Raza",
    gender: "Male",
    profession: "Data Analyst"
  },
  {
    name: "Ayesha Malik",
    gender: "Female",
    profession: "Software Engineer"
  },
  {
    name: "Hamza Sheikh",
    gender: "Male",
    profession: "Digital Marketer"
  }
];

  return (
    <div className='flex flex-wrap gap-2'>
      <Nav title = 'Zia-Ul-Islam' color = 'pink' links={['Courses','Bootcamp','Classroom','profile']} />
      {users.map(function(user){
        return user.gender==='Male'?<Male name={user.name} gender={user.gender} profession={user.profession}/>:<Female name={user.name} gender={user.gender} profession={user.profession} />
      })}
    </div>
  )
}

export default App
