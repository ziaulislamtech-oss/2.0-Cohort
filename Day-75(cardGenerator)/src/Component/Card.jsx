import React from 'react'

const Card = (props) => {
  console.log(props.id)
  return (
    <div >
    <div  className='p-4 rounded-2xl w-[280px] h-[320px] flex flex-col items-center bg-amber-300'>
            <img className='w-20 h-20 object-top object-cover rounded-[50%]' src={props.elem.url} alt="" />
            <h1 className='font-bold text-xl'>{props.elem.name}</h1>
            <h2 className='font-semibold text-blue-500'>{props.elem.role}</h2>
            <h3 className='text-center'>{props.elem.description}</h3>
            <button onClick={()=>{props.deleteHandler(props.idx)}} className='bg-red-400 px-4 py-2 rounded'>Remove</button>
          </div>
    </div>
  )
}

export default Card
