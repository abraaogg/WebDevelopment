import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import RatingDemo from './RatingDemo';
import FormDemo from './FormDemo';

function App() {

  return (
    <>
      <FormDemo/>

      {/* <RatingDemo/>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button> */}
    </>
  )
}

export default App
