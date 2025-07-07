
import './App.css'

// import Chicken from './Chicken';
// import Greeter  from './Greeter';
// import Die from './die';
// import ListPicker from './ListPicker';
// import DoubleDice from './DoubleDice';
// import Heading from './Heading';
// import ColorList from './ColorList';
// import ShoppingList from './ShoppingList';
// import Property from './Property';
import PropertyList from './PropertyList';
import Clicker from './Clicker';
import Counter from './Counter';
import Toggler from './Toggler';
import ToggleCounter from './ToggleCounter';
import ColorSquares from './ColorSquares'

// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];

const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];

// const data = [
//   {id: 1, item: 'eggs', quantity: 12, completed: false},
//   {id: 2,item: 'milk', quantity: 1, completed: true},
//   {id: 3,item: 'flour', quantity: 4, completed: false},
//   {id: 4,item: 'sugar', quantity: 2, completed: true},
// ];

function App(){
  return (
    <div>
      <ColorSquaresGrid colors={colors} />
    </div>
    // <div>
    //   <Toggler/>
    //   <ToggleCounter/>
    // </div>

    // <div>
    //   <Counter/>
    // </div>

    // <div>
    //   <Clicker message='HI!!!' buttonText='Click Me'/>
    //   <Clicker message='Please Stop Clicking!!!' buttonText='Do not click'/>
    // </div>
    // <div>
    //   <PropertyList properties={properties}/>
    //   </div>
    // <div>
    //   <ShoppingList item={data}/>
    // </div>
  // <div className='card'>
  //     <div className='appy'>
  //     <Heading text='Welcome' fontSize='40px'/>
  //     <DoubleDice/>
  //     <DoubleDice/>
  //     <DoubleDice/>

  //     <ColorList colors = {['red', 'pink', 'purple', 'teal']}/>
  //   </div>
   

  //   <ListPicker values={[1,2,3]}/>

  //   <Greeter person ='Bill' from='Colt'/>
  //   <Greeter person ='Ted' from='Colt'/>
  //   <Greeter person ='Rosa' from='Colt'/>
  //   <Die numSides = {20}/>
  //   <Die numSides = {6}/>
  //   <Die numSides = {10}/>
  // </div>
  );
}


export default App
