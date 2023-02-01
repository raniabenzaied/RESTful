import React from 'react'
import {useState} from 'react'
import './AddContact.css'
import {PostContact} from '../../api/contact'
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
const AddContact = () => {
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [description,setDescription]=useState('')
const [age,setAge]=useState('')
const navigate = useNavigate()
const handelAdd=async(values)=>{
 await PostContact(values)
 navigate('/list')
}
  return (
    <div>
       <div> <div className='test'>
    <form   id="login-form" class="login-form" autocomplete="off" >
  <h1>Add a New Contact</h1>
  <div>
    <label class="label-email">
      <input type="" class="text" name="name" placeholder="Name" tabindex="1" required  value={name} 
      onChange={(e)=>setName(e.target.value)}   />
      <span class="required">Name</span>
    </label>
  </div>
  <div>
    <label class="label-email">
      <input type="" class="text" name="age" placeholder="age" tabindex="1" required   value={age} 
      onChange={(e)=>setAge(e.target.value)} />
      <span class="required">Age</span>
    </label>
  </div>
  <div>
    <label class="label-email">
      <input type="" class="text" name="description" placeholder="description" tabindex="1" required  value={description} 
      onChange={(e)=>setDescription(e.target.value)} />
      <span class="required">Description</span>
    </label>
  </div>
  <div>
    <label class="label-password">
      <input type="text" class="text" name="Email" placeholder="Email" tabindex="2" required  value={email} 
      onChange={(e)=>setEmail(e.target.value)}  />
      <span class="required">Email</span>
    </label>
  </div>
  <div class="email">
    <a><Button variant='light' onClick={()=>handelAdd({name,age,description,email})} >Add New Contact</Button></a>
  </div>

</form>
</div>
</div>
    </div>
  )
}

export default AddContact
