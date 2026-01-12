import React from 'react'

const Male = (props) => {
    console.log(props)
  return (
    <div className='flex flex-col justify-start items-start w-40 h-50 bg-amber-300 p-2'>
      <h2 className='text-xl font-bold'>hello i am {props.name}</h2>
      <p>Gender : {props.gender}</p>
      <p>Profession {props.profession}</p>

    </div>
  )
}

export default Male
