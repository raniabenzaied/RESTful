import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router';
import {deleteContact} from '../../api/contact'
import Button from 'react-bootstrap/Button';

const CardContact = ({users,getContact}) => {
  console.log(users,'users')
  const navigate=useNavigate()
  const navupdate=()=>{
navigate(`/update/${users._id}`)
  } 
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
      <Card.Body>
        <Card.Title>{users.name}</Card.Title>
        <Card.Text>
          {users.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{users.age}</ListGroup.Item>
        <ListGroup.Item>{users.email}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <a href="#"><Button variant="light" onClick={()=>navupdate()}>Update</Button></a>
      <a href="#"><Button variant="light" onClick={async()=>{await deleteContact(users._id);getContact()}} >Delete</Button></a>
      </Card.Body>
    </Card>
    </div> 
  )
}

export default CardContact


