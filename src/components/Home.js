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
            {/* <div  className="dark-overlay" > */}
            
                        
                        <Row style={{paddingLeft: "4vw"}}>
                            <div  className="col-lg-6 text-white">
                                <h1 style={{fontSize: "13vw"}} className="display-4 font-weight-bold">Hello,</h1>
                                <div class="d-flex text-white">
                                    <div class="p-2 align-self-start">
                                        <h5 style={{fontSize: "8vw"}} className="font-weight-bold">I am Nikhil Verma</h5>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-lg-6 d-none d-lg-block"><img className="mt-6 pr-5 img-fluid" style={{borderRadius: "25px"}} alt="" src={nikhil} /></div>
                            <div className="col d-flex text-white">
                                    <div className="lign-self-start">
                                        <h5 style={{fontSize: "6vw"}} className="font-weight-bold">Spring Boot, React, React-Native and Web-Dev</h5>
                                    </div>
                            </div>
                        </Row>
                        
                    
            {/* </div> */}
            </section>
            
        
    )
}


export default Home;