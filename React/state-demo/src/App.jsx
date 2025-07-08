import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Counter'
import Counter from './Counter'
import Dumbo from './Dumbo'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'

function App() {

  return (
    <>
      <h1>State Demo</h1>
      <EmojiClicker/>
      {/* <ScoreKeeper/> */}
      {/* <Dumbo/> */}
      {/* <Counter/>  */}
    </>
  )
}

export default App
