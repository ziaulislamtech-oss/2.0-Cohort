import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate() 
  return (
    <div className='home'>
      <h1>Upgrade Your Lifestyle</h1>
      <p>Discover the best deals on premium electronics and fashion.</p>
      <button className='cta' onClick={()=> {navigate('product')}}>Explore Products </button>
    </div>
  )
}

export default Home
