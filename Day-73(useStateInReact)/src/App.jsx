import React, { useState } from 'react'
import Washroom from './Washroom'

const App = () => {
  let [gender,setGender] = useState('Male')
  function changeGender(){
    if(gender ==='Male'){
      setGender('Female')
    }
    else if(gender==='Female'){
      setGender('Others')
    }else{
      setGender('Male')
    }
  }
  return (
    <div>
     <Washroom user={gender}/>
     <button onClick={changeGender}>Change gender</button>
    </div>
  )
}

export default App
