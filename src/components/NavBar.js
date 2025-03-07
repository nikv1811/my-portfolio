import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';



const NavBar = () => {
    
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <nav className="bg-light navbar navbar-expand-sm fixed-top" style={{ padding: 0, marginBottom: "5px"}} id="navbar">
      <Navbar light>
        <NavbarBrand href="/fefwe" className="mr-auto">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="ml-auto">
            <NavItem>
              <a className="nav-link" href="/components/">Components</a>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </nav>
  );
}

export default NavBar;