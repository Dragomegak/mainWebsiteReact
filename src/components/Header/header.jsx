import React from 'react';
 
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
 
const Header = props => (
  <header className="header">
    <Navbar expand="md" variant="dark" bg="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* Do links this way for it to correctly work */}
              <Link to="/home" className="nav-link">Home</Link>
              <Link to="/projects" className="nav-link">Projects</Link>
          </Nav>
          <Nav className="ml-auto">
              <Link to="/contact-info" className="nav-link">Contact Info</Link>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);
 
export default Header;