import React, {useState} from 'react'
import './App.css';
import Data from './data'

export default function App() {

console.log(Data)
  const [items, setItems] = useState(Data)
function click(){

  const item =  `item ${Data.length + 1}`
  console.log(item)
  setItems((prevItem) => [...prevItem, item] )
}

function clearAll(){
  setItems([])
}

function deleteSingle(){

};

const hola = items.map(function(item, index){
  return (<div key={index} >{item.title}
  <span onClick={deleteSingle}>X</span></div>)
})
  return (
    <div className="App">
      <button onClick={click}>
        Add new item
      </button>
      {hola}
      <button onClick={clearAll}>
        Clear all
      </button>
    </div>
    
    
  );
}

//export default App;
