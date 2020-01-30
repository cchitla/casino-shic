import React from 'react';
import './Navbar.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";
import { useAuth0 } from "../../auth/auth0/Auth0";

const NavBar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout, loading, user } = useAuth0();
  if (loading) {
    return <div></div>;
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
          <NavLink to="/" className="navbar-brand">Casino S.H.I.C</NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink to="/" className="nav-link">Games</NavLink>
              <NavLink to="/ranking" className="nav-link">Ranking</NavLink>
            </Nav>
            
            
            
            <Nav>
            <Navbar.Text className="mr-4">{isAuthenticated ? <p>Welcome, {user.name} </p> : ""}</Navbar.Text>
              {!isAuthenticated ?
                <Link to="" className="nav-link" onClick={() => loginWithRedirect({})}> Login </Link>
                :
                // render dropwdown menu if user is logged in
                <NavDropdown title="Profile" id="collasible-nav-dropdown" >
                  <NavLink to="/settings" className="dropdown-item">Settings</NavLink>
                  <NavLink to="/profile" className="dropdown-item">Profile</NavLink>
                  <NavLink to="/friends" className="dropdown-item">Friends Online</NavLink>
                  <NavDropdown.Divider />
                  <Link to="" className="dropdown-item" onClick={() => logout()}> Logout </Link>
                </NavDropdown>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar;