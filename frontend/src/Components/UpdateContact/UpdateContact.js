import React,{useEffect, useState} from 'react'
import "./UpdateContact.css"
import {updateContact,getUniqueUser} from '../../api/contact'
import { useNavigate,useParams } from 'react-router';
import Button from 'react-bootstrap/Button';

const UpdateContact = () => {
  const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [description,setDescription]=useState('')
const [age,setAge]=useState('')
const navigate = useNavigate()
const {id}=useParams()
const handeUpdat=async(idcon,values)=>{
await updateContact(idcon,values)
navigate('/list')
}
//get contact by id 
const getUniqueId=async(conatctid)=>{
const data = await getUniqueUser(conatctid)
console.log("data unique",data.getuniqueuser
)
setName(data.getuniqueuser.name)
setDescription(data.getuniqueuser.description)
setAge(data.getuniqueuser.age)
setEmail(data.getuniqueuser.email)


}
useEffect(()=>{
if(id){getUniqueId(id)}
},[id])
  return (
    <div> <div className='test'>
    <form   id="login-form" class="login-form" autocomplete="off" >
  <h1>Update the Your Contact </h1>
  <div>
    <label class="label-email">
      <input type="" class="text" name="email" placeholder="Name" tabindex="1" required  value={name} 
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
      <span class="required">description</span>
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
    <a><Button  variant ='light' onClick={()=>handeUpdat(id,{name,age,description,email})} >update the Contact</Button></a>
  </div>

</form></div></div>
  )
}

export default UpdateContact