import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Nav from './Components/Nav'
import Product from './Pages/Product'
import Men from './Pages/Men'
import Women from './Pages/Women'
import RandomAbout from './Pages/RandomAbout'
import Courses from './Pages/Courses'
import AnyCourse from './Pages/AnyCourse'
import CourseDetails from './Pages/CourseDetails'
import NotFound from './Pages/NotFound'
const App = () => {
  return (
    <div>
     <Nav/>
      <h1>hello routing is being practicing</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/men' element={<Men/>}/>
        <Route path='/product/women' element={<Women/>} />
        <Route path='/About/:id' element={<RandomAbout/>}/>
        <Route path='/courses' element={<Courses/>} />
        <Route path='/courses/:anything' element={<AnyCourse/>} />
        <Route path='/courses/:anything/detail' element={<CourseDetails/>} />

        {/* not found page */}

        <Route path='/*' element={<NotFound/>}/>
        


      </Routes>
    </div>
  )
}

export default App
