import { useState } from "react"

export default function SignupForm(){
    const [firstName, setFirstName] = useState()
    const [LastName, setLastName] = useState()
    const updateFirstName = (evt) =>{
        setFirstName(evt.target.value);
    }
    const updateLastName = (evt) =>{
        setLastName(evt.target.value);
    }
    const handleSubmit = () => {
        console.log(firstName, LastName)
    }
    return (
        <div>
            <label htmlFor="firstname">First Name</label>
            <input 
            type="text" 
            placeholder="First Name"
            value={firstName} 
            onChange={updateFirstName}
            id="firstname" 
            />

             <label htmlFor="lastname">Last Name</label>
            <input 
            type="text" 
            placeholder="Last Name"
            value={LastName} 
            onChange={updateLastName}
            id="lastname" 
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}