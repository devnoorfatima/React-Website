import React from 'react';
import { Nav,Navbar} from 'react-bootstrap';

function header() {
    return (
      <div className="header">
      {/* Navbar */}
      <Navbar bg='light' expand="lg">
        <Navbar.Brand className='ml-4' href="#home">Amazed</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#work">Work</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
       </Nav>
       </Navbar.Collapse>
      </Navbar>
  
      </div>
    );
  }
  export default header;
  