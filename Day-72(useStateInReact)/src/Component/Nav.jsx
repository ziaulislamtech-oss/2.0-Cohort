import React from 'react'

const Nav = (props) => {
    console.log(props)
  return (
    <div className='flex w-full h-10 mb-2 justify-between bg-amber-200'>
      <h2>{props.title}</h2>
      <div className='flex w-80 justify-around'>
        {props.links.map(function(ele,idx){
            return <h5 key={idx}>{ele}</h5>
        })}
      </div>
    </div>
  )
}

export default Nav
