import React from 'react'
import { useParams } from 'react-router-dom'

const AnyCourse = () => {
    const params = useParams()
    console.log(params.anything)
  return (
    <div>
      <h1 className='text-3xl underline font-bold'>Some Course Page</h1>
    </div>
  )
}

export default AnyCourse
