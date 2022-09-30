import React, {useState, useEffect} from 'react'
import './App.css';
import Lists from './components/Lists'

function getLocalStorage(){
  let item = localStorage.getItem('firstThing')

  if (item)
  {
    return item = JSON.parse(localStorage.getItem('firstThing'))
  }

  else
  {
    return item = []
  }
}

export default function App() {
  const [detail, setDetail] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const [editId, setEditId] = useState(null)
  const [items, setItems] = useState(getLocalStorage())

function deleteSingle(itemId){
  const newItem= items.filter(function(itId){
    return itId.id !== itemId
})
console.log('clicked')

setItems(newItem)

}

  function editItem(editId) {
    const editItem = items.find(function(item){
      return item.id === editId
    })
      setDetail(editItem.title)
      setIsEdit(true)
      setEditId(editId)
  }

  function handleChange1(e){
    setDetail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    

    if (!detail)
    {
      alert('enter an item')
    }

    else if (detail && isEdit)
    {
      setItems(items.map(function(someItem){
        if (someItem.id === editId){
            return {...items, title:detail}
        }
        return someItem
      })
      )

      setIsEdit(false)
    }

    else if (detail)
    {
      const nextItem = 
      { id: items.length + 1,
        title: detail
      }

      setItems((prevItem) =>[...prevItem, nextItem])

    }

    setDetail('')

    
    
  }

  useEffect(()=>{
    localStorage.setItem('firstThing',JSON.stringify(items))
  },[items])

  const allItems = items.map(function(item){
    console.log(item)
    return <Lists key={item.id} item={item} deleteSingle={deleteSingle} editItem={editItem}/>
  })
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>

        <label htmlFor='Email'>Email</label>
        <input type='text' onChange={handleChange1} placeholder='email' value={detail} name='Email'/>
        <br/>
        
        
      </form>

      <div>
        {allItems} 
      </div>
    </div>
    
    
  );
}

//export default App;
