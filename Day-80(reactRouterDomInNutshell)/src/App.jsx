import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Layout from './Components/Layout'
// import Layout from './Layout'

const App = () => {
  const allRoutes = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,   // 👈 Navbar + Footer here
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'courses',
          element: <Courses />
        }
      ]
    }
  ])

  return <RouterProvider router={allRoutes} />
}

export default App
