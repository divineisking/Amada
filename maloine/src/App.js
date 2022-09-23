import React, {useState} from 'react'
import './App.css';
import Data from './data'

export default function App() {

  const [items, setItems] = useState(Data)

  function refresh(){
    setItems(Data)
  }
function addNew(){

  const item =  {
    id: items.length + 1,
    title:`item ${items.length +1}`}
  setItems((prevItem) => [...prevItem, item] )
}

function clearAll(){
  setItems([])
}

function deleteSingle(itemId){
  const newItems = items.filter(function(itel){
    return itel.id !== itemId
  })

  setItems(newItems)
};

const hola = items.map(function(item){
  return (<div key={item.id} >{item.title}
  <span className='button' onClick={()=>deleteSingle(item.id)}>X</span></div>)
})
  return (
    <div className="App">
      <button onClick={addNew}>
        Add new item
      </button>
      {hola}
      <button onClick={clearAll}>
        Clear all
      </button>
      <button onClick={refresh}>
        Refresh
      </button>
    </div>
    
    
  );
}

//export default App;
