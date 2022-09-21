import React, {useState} from 'react'
import './App.css';
export default function App() {

  const [count, setCount] = useState(100);
  function increment(){
    setCount((prevCount) => prevCount *2 )
  };

  function reset(){
    setCount(100)
  };

  function decrement(){
    setCount((prevCount) => prevCount /2)
  }
  return (
    <div className="App">
      <div >
      <button onClick={decrement}>
        Decrement
      </button>

        {count}

        <button onClick={increment}>
        Increment
      </button>
      </div>
      <button className='reset' onClick={reset}>
        Reset
      </button>
      
      

      
    </div>
    
  );
}

//export default App;
