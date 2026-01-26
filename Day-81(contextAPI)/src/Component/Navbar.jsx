import React, { useState } from 'react'

const Navbar = (props) => {
    const [newTheme, setNewTheme] = useState('')
    // console.log(props.changeTheme())
    return (
        <div className='nav'>

            <form onSubmit={(e) => {
                e.preventDefault()
               props.changeTheme(newTheme)

                setNewTheme('')
            }}>
                <input
                    value={newTheme}
                    onChange={(e) => setNewTheme(e.target.value)}
                    type="text" 
                    placeholder='Enter Theme' 
                    />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Navbar
