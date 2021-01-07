import React from 'react'
// import './footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {SiGmail, SiHackerrank} from 'react-icons/si'
import {FaGithubSquare, FaLinkedin, FaFacebookSquare} from 'react-icons/fa'


const Footer = () =>{

    return(
        <section className="container">
            <div className="row-hl d-flex justify-content-center align-items-center">
                <div className="item-hl m-1"><p className="text-white">Contact Me</p></div>
            </div>
            <div className="row-hl d-flex justify-content-center align-items-center">
                <div className="item-hl"><p className="text-white">Mail  &nbsp;<a href="mailto: nikhilv805@gmail.com.com">nikhilv805@gmail.com
                </a></p></div>             
            </div>
            <div className="row-hl d-flex justify-content-center align-items-center">
                <div className="item-hl"><p className="text-white">Phone  +91-9407044660</p></div>
            </div>
            <div className="row-hl d-flex justify-content-center align-items-center">
                <div className="item-hl m-1"><a href="mailto: nikhilv805@gmail.com.com"><SiGmail className="m-1" size="33" color="red" />
                </a></div>
                <div className="item-hl m-1"><a href="https://www.hackerrank.com/nikhilv805"><SiHackerrank className="m-1" size="33" color="green"/>
                </a></div>
                <div className="item-hl m-1"><a href="https://www.linkedin.com/in/nikhil-verma-49b570175/"><FaLinkedin className="m-1" size="33"/>
                </a></div>
                <div className="item-hl m-1"><a href="https://github.com/nikv1811"><FaGithubSquare className="m-1" size="33" color="grey"/>
                </a></div>
                <div className="item-hl m-1"><a href="https://www.facebook.com/nkverma1811/"><FaFacebookSquare className="m-1" size="33"/>
                </a></div>
            </div>
            <footer className="text-center text-white">
            {/* <h3></h3> */}
                    <p>Copyright &copy; <span>2021</span> Nikhil Verma
                    </p>
            </footer>
        </section>
    )
}

export default Footer