import React from 'react'

const Card = (props) => {
  console.log(props)
  return (
    <div >
    <div  className='p-4 rounded-2xl w-[280px] h-[320px] flex flex-col items-center justify-start  bg-[#242429]'>
            <img className='w-20 h-20 object-top object-cover rounded-[50%]' src={props.elem.imageURL} alt="" />
            <h1 className='font-bold text-xl'>{props.elem.userName}</h1>
            <h2 className='font-semibold text-blue-500'>{props.elem.userRole}</h2>
            <h3 className='text-center mt-2 text-[#E5E7EB]'>{props.elem.userDesc}</h3>
            <button onClick={()=>{props.deleteHandler(props.idx)}} className='bg-red-400 text-white px-3 py-2  rounded-[8px] mt-2'>Remove</button>
          </div>
    </div>
  )
}

export default Card
