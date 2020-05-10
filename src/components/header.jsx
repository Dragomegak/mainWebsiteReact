import React from 'react';
 
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table} from 'react-bootstrap';
 
const Navigation = props => (
   <div className="App">
      <header>
        <Navbar expand="md" variant="dark" bg="dark">
          <Navbar.Brand href="#home">Steven Le's Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/home">Projects</Nav.Link>
              </Nav>
              <Nav className="ml-auto">
                  <Nav.Link href="/home">Contact Info</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      </div>
);
 
export default Navigation;