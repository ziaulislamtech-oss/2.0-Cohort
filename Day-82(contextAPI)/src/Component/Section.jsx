import React, { useContext } from 'react'
import PostsContext, { postDataContext } from '../Context/PostsContext'

const Section = (props) => {
  const data = useContext(postDataContext)
  console.log(data)
  return (
    <div className='h-[600px]  bg-zinc-500'>
      <h1 className='text-xl text-white'> {props.children}</h1>
    </div>
  )
}

export default Section
