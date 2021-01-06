import React from 'react';
// import background from './assets/background.png'
// import {Link, Router} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import NavBar from './components/NavBar';
import Home from './components/Home'
import About from './components/About'
// import { Card, CardBody, CardImg, Container } from 'reactstrap'
const App = () => {
  
  return(
    <div>
    <NavBar />
    <Home />
    <About />
        
        
    {/* <a href="https://drive.google.com/file/d/1j4CCeCUC0dS44c9sGXwVcWHuHkCynyB4/view?usp=sharing" target="_blank" download rel="noopener noreferrer" download>
   <Button>
      <i className="fas fa-download"/>
      Download File
   </Button>
</a> */}
    </div>
  )
}

export default App;