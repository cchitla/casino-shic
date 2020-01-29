import React from 'react';
import './Navbar.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";
import { useAuth0 } from "../../auth/auth0/Auth0";

const NavBar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

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
              {!isAuthenticated ? 
                <Link to="" className="nav-link" onClick={() => loginWithRedirect({})}> Login </Link> 
                : <Link to="" className="nav-link" onClick={() => logout()}> Logout </Link>}
              

              <NavDropdown title="Profile" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/settings" className="dropdown-item">Settings</NavDropdown.Item>
                <NavDropdown.Item href="/profile" className="dropdown-item">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/friends" className="dropdown-item">Friends Online</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/logout" className="dropdown-item">Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar;