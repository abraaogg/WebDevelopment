import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

export default function FormDemo(){
    const [name, setName] = useState('')
    const updateName = (e) => {
        setName(e.target.value)
    }
    const [volume, setVolume] = useState('')
    const updateVolume = (e) => {
        setVolume(e.target.value)
    }
    return (
        <div>
            <h1>Name is: {name}</h1>
            <TextField 
            id="outlined-basic" 
            label="Type here" 
            placeholder='pizza'
            variant="outlined"
            value={name}
            onChange={updateName}
             />
             <h1>volume: {volume}</h1>
             <Slider 
             aria-label="Volume" 
             value={volume} 
             onChange={updateVolume} 
             
             />
        </div>
    )
}