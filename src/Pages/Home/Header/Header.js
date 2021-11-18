import React from 'react';
import { Navbar, Button,Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand to="/home" className="main-text">
            S-PROPERTY 
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end nav-text">
            <Nav.Link as={HashLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/ourServices">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/about#about">
              About
            </Nav.Link>
            <Nav.Link as={HashLink} to="/explore">
              Explore
            </Nav.Link>
           
            {user?.email && (
              <Nav.Link as={HashLink} to="/pay">
               Payment 
              </Nav.Link>
            )}
            {user?.email && (
              <Nav.Link as={HashLink} to="/myOrder">
                My Order
              </Nav.Link>
            )}
            {user?.email && (
              <Nav.Link as={HashLink} to="/review">
                Review
              </Nav.Link>
            )}
            <Navbar.Collapse className="justify-content-end">
            {user?.email ? (
                <Button onClick={logOut}>
                  <i className="fas fa-sign-in-alt"></i>Log Out
                </Button>
              ) : (
                <Nav.Link as={Link} to="/signIn">
                  <i className="fas fa-sign-out-alt"></i> Sign In
                </Nav.Link>
              )} 
              <Navbar.Text className="display-name">
                {" "}
                <Link className="display-name" to="/signIn">
                  {" "}
                  {user?.displayName}
                </Link>
              </Navbar.Text>
             
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;