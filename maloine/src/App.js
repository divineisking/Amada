import React, {useState} from 'react'
import './App.css';

export default function App() {

  const [text, setText] = useState('ABCDe')
  const [email, setEmail] = useState('')

  function handleChange(e){
    setText(e.target.value)
  }
  function handleChange1(e){
    setEmail(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>

        <label htmlFor='Name'>Name</label>
        <input type='text' onChange={handleChange} placeholder='name' value={text} name='Name' />
        <br/>
        <label htmlFor='Email'>Email</label>
        <input type='text' onChange={handleChange1} placeholder='email' value={email} name='Email'/>
        <br/>
        <button type='submit' >Submit</button>
        
      </form>
    </div>
    
    
  );
}

//export default App;
