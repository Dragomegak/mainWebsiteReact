import React from 'react';
 
import { Link } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
 
const Header = props => (
   <div className="App">
      <header>
        <Navbar expand="md" variant="dark" bg="dark">
          <Navbar.Brand>Steven Le's Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  {/* Do links this way for it to correctly work */}
                  <Link to="/home" className="nav-link">Home</Link>
                  <Link to="/projects" className="nav-link">Projects</Link>
              </Nav>
              <Nav className="ml-auto">
                  <Link href="/home">Contact Info</Link>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      </div>
);
 
export default Header;