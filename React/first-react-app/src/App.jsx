
import './App.css'

import Chicken from './Chicken';
import Greeter  from './Greeter';
import Die from './die';
import ListPicker from './ListPicker';3
import DoubleDice from './DoubleDice';

function App(){
  return (
  <div>
    <DoubleDice/>
    <DoubleDice/>
    <DoubleDice/>

    {/* <ListPicker values={[1,2,3]}/> */}

    {/* <Greeter person ='Bill' from='Colt'/>
    <Greeter person ='Ted' from='Colt'/>
    <Greeter person ='Rosa' from='Colt'/>
    <Die numSides = {20}/>
    <Die numSides = {6}/>
    <Die numSides = {10}/> */}
  </div>
  );
}


export default App
