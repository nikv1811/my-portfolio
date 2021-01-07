import React from 'react'
import "./home.css"
// import background from '../assets/background.png'
import nikhil from '../assets/nikhil.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row} from 'reactstrap'
// import NavBar from './NavBar'

const Home = () => {

    return(
        
           
        <section id="home" className="pt-4">
            <div  className="dark-overlay" >
            
                        
                        <Row style={{marginTop: "7rem", padding: "4rem"}}>
                            <div  className="col-lg-6 text-white">
                                <h1 className="display-3 px-3">Hello,</h1>
                                <div class="d-flex text-white">
                                    <div class="p-4 align-self-start">
                                        <p className="display-4">I am Nikhil Verma</p>
                                    </div>
                                </div>
                                <div class="d-flex text-white">
                                    <div class="p-4 align-self-start">
                                        <p className="display-4">Spring Boot, React, React-Native, </p>
                                        <p className="display-4 mt-0 animate_animated animate_fadeInRight">Web-Dev</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 d-none d-lg-block"><img className="mt-6 pr-5 img-fluid" style={{borderRadius: "25px"}} alt="" src={nikhil} /></div>
                        </Row>
                        
                    
            </div>
            </section>
            
        
    )
}


export default Home;