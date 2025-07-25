import { useState } from "react"

export default function Username(){
    const [username, setUsername] = useState('Timmy')
    const updateUsername = (evt) =>{
        setUsername(evt.target.value);
    }
    return (
        <div>
            <label htmlFor="username">Enter a username</label>
            <input 
            type="text" 
            placeholder="username"
            value={username} 
            onChange={updateUsername}
            id="username" 
            />
            <button>Submit</button>
        </div>
    )
}