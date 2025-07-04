
import './App.css'

import Chicken from './Chicken';
import Greeter  from './Greeter';
import Die from './die';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';

function App(){
  return (
  <div className='card'>
      <div className='appy'>
      <Heading text='Welcome' fontSize='40px'/>
      <DoubleDice/>
      <DoubleDice/>
      <DoubleDice/>

      <ColorList colors = {['red', 'pink', 'purple', 'teal']}/>
    </div>
   

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
