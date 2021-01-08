import React from 'react';
import resume from '../resume/resume_nikhil.pdf'
import {Card, CardBody, CardFooter, CardHeader, CardText} from 'reactstrap';



const About = () => {
    return(
            <Card>
                <CardHeader className="display-3 text-center text-white" style={{background: "#242B2E"}}><h2 style={{fontSize: "7vw"}}>About Me</h2></CardHeader>
                <CardBody style={{background: "#CAD5E2"}}>
                    <CardText>
                        <h2 className="display-4 font-weight-bold">Hello!</h2>
                        <h2 className="display-5">I am Nikhil</h2><br />
                        <h3 className="display-5">Putting together bits and pieces of code to develop <strong>Web</strong> as well 
                        as <strong>Android</strong> Applictions, have deep interest in Full-Stack Development and also in Photography, Currently working as Programmer Analyst Trainee in a MNC,
                         and always looking for better opportunities</h3>
                    </CardText>
                </CardBody>
                <CardFooter style={{background: "#CAD5E2"}}>
                <a href={resume} target="_blank" className="btn btn-warning bg-warning" alt="Nikhil's Resume" rel="noreferrer" download>Download Resume</a>
                </CardFooter>
            </Card>        
    )
}

export default About