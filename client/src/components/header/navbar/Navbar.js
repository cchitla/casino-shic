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
              <NavLink to="/login" className="nav-link">Login</NavLink>
              <NavDropdown title="Profile" id="collasible-nav-dropdown">
                <NavDropdown.Item><NavLink to="/account" className="dropdown-item">Settings</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to="/profile" className="dropdown-item">Profile</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to="/friends" className="dropdown-item">Friends Online</NavLink></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item><NavLink to="/logout" className="dropdown-item">Log Out</NavLink></NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}
      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

      {isAuthenticated && (
        <span>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/profile">Profile</Link>
        </span>
      )}
    </>
  )
}

export default NavBar;