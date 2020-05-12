import React from 'react';
 
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table} from 'react-bootstrap';
 
const Header = props => (
   <div className="App">
      <header>
        <Navbar expand="md" variant="dark" bg="dark">
          <Navbar.Brand href="mainWebsiteReact/">Steven Le's Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Link to="/home" className="nav-link">Home</Link>
                  <Link to="/projects" className="nav-link">Projects</Link>
              </Nav>
              <Nav className="ml-auto">
                  <Nav.Link href="/home">Contact Info</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      </div>
);
 
export default Header;