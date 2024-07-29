import Header from './Header';
import Context from './Context';
import Footer from './Footer';
import { useState,useEffect } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
  const API_URL = 'http://localhost:3500/items';
  const [items,SetItems] = useState([])

const [newItem,setNewItem] = useState('')

const [search,setSearch] = useState('')

useEffect(() => {
  const fetchItems = async () => {
    try {
      const response = await fetch(API_URL)
      const listItems = await response.json()
      SetItems(listItems)
    } catch(err){
      console.log(err.stack)
    }
  }
  fetchItems()
},[])

const addItem = (item) => {
  const id = items.length ? items[items.length - 1].id +1 : 1;
  const addNewItem = {id,checked:false,item}
  const listItems = [...items, addNewItem]; 
  SetItems(listItems)
  localStorage.setItem('todo_list',JSON.stringify(listItems))
}

const handleCheck = (id) =>{
    const listItems = items.map((item) => item.id===id ? {...item,checked:!item.checked} : item)
    SetItems(listItems)
    localStorage.setItem('todo_list',JSON.stringify(listItems))
}
const handleDelete =(id) =>{
    const listItems = items.filter((item)=> item.id!==id)
    SetItems(listItems)
    localStorage.setItem('todo_list',JSON.stringify(listItems))
}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log('submitted')

  addItem(newItem)
  setNewItem('')
  console.log(newItem)
}
  return (
    <div className="App">
      <Header />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        serach={search}
        setSearch={setSearch}
      />
      <Context 
        items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer 
        length = {items.length}
      />

    </div>
  );
}

export default App;
