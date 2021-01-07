import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import  {Container, Progress} from 'reactstrap'
import {FaJsSquare, FaJava, FaReact, FaHtml5, FaCss3, FaBootstrap} from 'react-icons/fa'
import {SiSpring, SiCplusplus} from 'react-icons/si'

const Skills = () => {
    return(
        <Container fluid style={{marginBottom: "11px", marginTop: "11px"}}>
            <div className="row-hl d-flex justify-content-center">
                <h3 className="display-4 font-weight-bold text-white ">My Skills</h3><br/>
            </div>
            <div className="row-hl d-flex justify-content-center">
                <FaHtml5 className="m-1" size="33" color="orange"/><FaCss3 className="m-1" size="33" color="blue"/>
                <FaJsSquare className="m-1" size="33" color="yellow"/>
                <FaBootstrap className="m-1" size="33" color="purple"/><FaReact className="m-1" size="33" color="lightblue"/>
                <SiCplusplus className="m-1" size="33" color="blue"/>
                <FaJava className="m-1" size="33" color="red"/><SiSpring className="m-1" size="33" color="lightgreen"/></div>
            <div className="row text-white" style={{padding: "11px"}}>
    
                <div className="col-lg-6">
                    <h3 className="mt-3">HTML 5</h3>
                    <Progress animated color="success" value={70} >70%</Progress>
                </div>
                <div className="col-lg-6">
                    <h3 className="mt-3">CSS 3</h3>
                    <Progress animated color="success" value={60} >60%</Progress>
                </div>
                <div className="col-lg-6">
                    <h3 className="mt-3">JavaScript</h3>
                    <Progress animated color="success" value={70} >70%</Progress>
                </div>
                <div className="col-lg-6">
                    <h3 className="mt-3">BootStrap</h3>
                    <Progress animated color="success" value={45} >45%</Progress>
                </div>
                <div className="col-lg-6">
                    <h3 className="mt-3">React Js (With Hooks)</h3>
                    <Progress animated color="success" value={55} >50%</Progress>
                </div>
                <div className="col-lg-6">
                    <h3 className="mt-3">C++</h3>
                    <Progress animated color="success" value={70} >70%</Progress>
                </div>
                <div className="col-lg-6">
                    <h3 className="mt-3">Java SE</h3>
                    <Progress animated color="success" value={80} >80%</Progress>
                </div>
                <div className="col-lg-6">
                    <h3 className="mt-3">Spring Boot</h3>
                    <Progress animated color="success" value={60} >60%</Progress>
                </div>
            </div>
        </Container>
    )
}

export default Skills