import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import About from './pages/About'
import Courses from './pages/Courses'
import Kodr from './pages/Kodr'
import Kodex from './pages/Kodex'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/courses' element={<Courses />} >
          <Route path='/courses/koder' element={<Kodr />} />
          <Route path='/courses/kodex' element={<Kodex/>} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
