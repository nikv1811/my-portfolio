import React from 'react';
// import background from './assets/background.png'
// import {Link, Router} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

// import NavBar from './components/NavBar';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects';
// import {Container} from 'reactstrap'
const App = () => {
  
  // const [collapsed, setCollapsed] = useState(true);

  // const toggleNavbar = () => setCollapsed(!collapsed);
  return(
    <div>

{/* <nav className="bg-light navbar navbar-expand-sm fixed-top" style={{ padding: 0, marginBottom: "5px"}} id="navbar">
      <Navbar light>
        <NavbarBrand href="#home" className="mr-auto">Home</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="ml-auto">
          <NavItem>
              <a className="nav-link" href="#about">About</a>
            </NavItem>
            <NavItem>
              <a className="nav-link" href="#home">Home</a>
            </NavItem>
            
            <NavItem>
              <a className="nav-link" href="#skills">Skills</a>
            </NavItem>
            <NavItem>
              <a className="nav-link" href="#projects">Projects</a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </nav> */}

    {/* <NavBar /> */}
    <Home id="home"/>
    <About id="about"/>
    <Skills id="skills"/>
    <Projects id="projects"/>
    <Footer/>
    
        
        
    
    </div>
  )
}

export default App;