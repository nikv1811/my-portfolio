import React from 'react'
import "./home.css"
// import background from '../assets/background.png'
import nikhil from '../assets/Nikhil.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col} from 'reactstrap'

const Home = () => {

    return(
        <section id="home" className="pt-4">
            <div  className="dark-overlay">
                
                        
                        <Row>
                            <Col md="6" className="text-white p-6">
                            <h1 className="display-3 pt-5 px-3">Hello,</h1>
                    
                        <div class="d-flex text-white">
                        
                            <div class="p-4 align-self-start">
                                I am Nikhil Verma
                            </div>
                        </div>
                        <div class="d-flex text-white">
                        
                            <div class="p-4 align-self-start">
                                Spring Boot, React, React-Native, Web-Dev
                            </div>
                        </div>
                            </Col>
                            <Col md="6"><img className="mt-5 pr-5 img-fluid" alt="" src={nikhil} /></Col>
                        </Row>
                        
                    
            </div>
            </section>
        
    )
}


export default Home;