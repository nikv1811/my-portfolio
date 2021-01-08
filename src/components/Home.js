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
            
                        
                        <Row style={{paddingLeft: "4rem"}}>
                            <div  className="col-lg-6 text-white">
                                <h1 style={{fontSize: "11vw"}} className="font-weight-bold">Hello,</h1>
                                <div class="d-flex text-white">
                                    <div class="p-2 align-self-start">
                                        <h5 style={{fontSize: "6vw"}} className="font-weight-bold">I am Nikhil Verma</h5>
                                    </div>
                                </div>
                                <div class="d-flex text-white">
                                    <div class="lign-self-start">
                                        <h5 style={{fontSize: "4vw"}} className="font-weight-bold">Spring Boot, React, React-Native, Web-Dev</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 d-none d-lg-block"><img className="mt-6 pr-5 img-fluid" style={{borderRadius: "25px"}} alt="" src={nikhil} /></div>
                        </Row>
                        
                    
            {/* </div> */}
            </section>
            
        
    )
}


export default Home;