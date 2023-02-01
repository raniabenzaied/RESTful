import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {fetchContacts} from '../../api/contact'
import {setContact} from '../../store/ContactSlice'
import CardContact from './CardContact'
const ListContact = () => {
//


const contact = useSelector(state=>state.contact)
  console.log(contact,'contacts in db')
//data


  const dispatch = useDispatch()
const getContact = async()=>{
  const data = await fetchContacts()


  dispatch(setContact(data.raniascontact))
}

useEffect(()=>{
  getContact()
},[])

  return (
    <div >
      {
        contact.map((e)=> <CardContact users={e} getContact={getContact}  /> )
      }
      
    </div>
  )
}

export default ListContact