import React, {useState} from 'react'
import './App.css';

export default function App() {

  const [formData, setForm] = useState({
    name:'',
    username: '',
    email:'',
    password:'',
    confirmPassword:'',
    gender:'',
    updates: false,
    
  })

  function handleChange(e){
  
    const {name,value, type, checked} = e.target

    setForm((prevForm)=>{
                return {...prevForm, 
                  [name]: type === 'checkbox' ? checked : value }
    })
    
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setForm({
      name:'',
      username: '',
      email:'',
      password:'',
      confirmPassword:'',
      female:'',
      male:'',
      updates: false,     
    })

    console.log(formData)
  }
  return (
    <div className="App">

      <h3>SIGNUP</h3>
  
      <form onSubmit={handleSubmit} className="form">

        <label htmlFor='name'>Name</label>
        <input type='text' onChange={handleChange} placeholder='Name' name='name' value={formData.name} />
        <br/>
        <label htmlFor='email'>Email</label>
        <input type='text' onChange={handleChange} placeholder='Email' name='email' value={formData.email}/>
        <br/>
        <label htmlFor='username'>Username</label>
        <input type='text' onChange={handleChange} placeholder='Username'  name='username' value={formData.username}/>
        <br/>
        <label htmlFor='password'>Password</label>
        <input type='text' onChange={handleChange} placeholder='Password'  name='password' value={formData.password}/>
        <br/>
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input type='text' onChange={handleChange} placeholder='Confirm Password'  name='confirmPassword' value={formData.confirmPassword}/>
        <br/>

        <div className='gender'>
        <input type='radio' onChange={handleChange} placeholder='FEMALE' name='gender' value='female' checked={formData.gender==='female'} id='female'/>
        <label htmlFor='female'>Female</label>
        <br/>
        <input type='radio' onChange={handleChange} placeholder='MALE' name='gender' value='male' checked={formData.gender ==='male'} id='male'/>
        <label htmlFor='male'>Male</label>
        </div>
        <br/>

        <select>
          <optgroup>
            Favourite Colour
            <option>
              Black
            </option>
            <option>
              White
            </option>
            <option>
              Pink
            </option>
          </optgroup>
          <optgroup>
            Favourite Food
            <option>
                Ewa
            </option>
            <option>
                Dodo
            </option>
            <option>
                Fufu
            </option>
          </optgroup>
        </select>
    

        <div className='emailupdates'>
        <input type='checkbox' onChange={handleChange} name='updates' id='updates' checked={formData.updates}/>
          <label htmlFor='updates'>I Would like to receive email updates</label>
        <br/></div>
        
        <button type='submit' >SUBMIT</button>
        
      </form>
    </div>
    
    
  );
}

//export default App;
