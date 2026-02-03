import React, { createContext } from 'react'
export const userDatacontext = createContext()

const UserContext = (props) => {
    console.log(props)
    const user = 'saarthak'
  return (
    <div className='context-div'>
      <userDatacontext.Provider value={user}>
        {props.children}
      </userDatacontext.Provider>
    </div>
  )
}

export default UserContext
