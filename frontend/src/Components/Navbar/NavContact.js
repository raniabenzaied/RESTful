import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
function NavContact() {
  return (
    <div>
       <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >RESTful</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to='/'> Home</Link></Nav.Link>
            <Nav.Link href="#features"><Link to='/list'>ListContact</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to='/add'>AddContact</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
    </div>
  )
}

export default NavContact

