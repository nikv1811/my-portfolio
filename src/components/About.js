import React from 'react';
import resume from '../resume/resume_nikhil.pdf'
import { Container,  } from 'reactstrap';



const About = () => {
    return(
        <Container fluid>
            <h1>About</h1>
            <a href={resume} target="_blank" className="btn btn-warning" alt="Nikhil's Resume" rel="noreferrer" download>
   {/* <Button>
      <i className="fas fa-download"/>
      Download File
   </Button> */}
   Download
</a>
        </Container>
    )
}

export default About