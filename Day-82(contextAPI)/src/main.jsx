import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './Context/UserContext.jsx'
import PostsContext from './Context/PostsContext.jsx'

createRoot(document.getElementById('root')).render(

  
  <PostsContext>
      <App/>

    </PostsContext>
 
)
