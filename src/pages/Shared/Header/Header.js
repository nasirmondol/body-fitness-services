import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import './Header.css'
import logo from '../../../images/HeaderLogo/header logo.png'
import auth from '../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth)

  const handleSingOut = async() =>{
    await signOut(auth)
  }
  return (
    <div>
      <Navbar collapseOnSelect fixed='top' expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img className='rounded-circle' src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto font-weight-bold">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>

            </Nav>
            <Nav>
              {user ?
                <Nav.Link onClick={() => handleSingOut()} as={Link} to="/login">Log out</Nav.Link> :
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              }
              <Nav.Link as={Link} to="/register">
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;