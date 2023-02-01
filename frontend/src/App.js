import './App.css';
import AddContact from '../src/Components/AddContact/AddContact'
import ListContact from '../src/Components/ListContact/ListContact'
import UpdateContact from './Components/UpdateContact/UpdateContact'
import Home from './Components/Home/Home'
import NavContact from './Components/Navbar/NavContact' 
import React from 'react'
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div> 
    <NavContact/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/list' element={<ListContact/>}/>
    <Route path='/update/:id' element={<UpdateContact/>}/>
    <Route path='/add' element={<AddContact/>}/>



   

   </Routes>
    </div>
  )
}

export default App

