import React, { useState } from 'react'

const NewForm = () => {
    const [formState, setFormState] = useState({})
    console.log(formState)
    
    return (    
        <form>
            <input
                type="text"
                placeholder="name"
                onChange={(e) => setFormState({
                    ...formState, 
                    name: e.target.value
                })}
            />

            <input
                type="email"
                placeholder="email"
                onChange={(e) => setFormState({
                    ...formState, 
                    email: e.target.value
                })}
            />

            <input
                type="text"
                placeholder="lastname"
                onChange={(e) => setFormState({
                    ...formState, 
                    lastname: e.target.value
                })}
            />

        </form>
    )
}

export default NewForm