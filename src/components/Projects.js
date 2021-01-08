import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, CardTitle, CardFooter, CardBody, CardText, Button, Row, Col} from 'reactstrap'

const Projects = () => {
    return(
        <div className ="container-fluid" style={{marginTop: "11px", marginBottom: "21px"}}>
            <div style={{margin: "11px"}}>
                <h3 className="display-4 font-weight-bold text-center text-white my-6">Some of my Projects</h3>
                <span><p className="text-white text-center">Is se Jyada hai bhi nahi vaise &#x1F622;</p></span>
            </div>
            <Row>
                <Col lg="4" sm="6" >
                    <Card color="secondary">
                        <CardBody>
                            <CardTitle><h3>Weather App</h3></CardTitle>
                            <CardText>A React Application which shows the current weather data 
                                of selected city
                                used openweathermap api for fetching current weather data
                            </CardText>
                        </CardBody>
                        <CardFooter><a className="mr-4" href="https://current-weather-react-app.web.app/"><Button color="primary">Visit</Button></a>
                        <a href="https://github.com/nikv1811/weather-app"><Button color="warning">Code</Button></a></CardFooter>
                    </Card>
                </Col>
                <Col lg="4" sm="6" >
                    <Card color="secondary">
                        <CardBody>
                            <CardTitle><h3>Expense Tracker</h3></CardTitle>
                            <CardText>Expense Tracker Application developed using Spring Boot for back-end and 
                                react for front-end allows user to keep track of his/her daily expenses
                            </CardText>
                        </CardBody>
                        <CardFooter><span >App Link and code will be added later</span></CardFooter>
                    </Card>
                </Col>
                <Col lg="4" sm="6">
                    <Card color="secondary">
                        <CardBody>
                            <CardTitle><h3>Tic-Tac-Toe</h3></CardTitle>
                            <CardText>Tic - Tac - Toe game developed using React-Native for Android and Ios
                            </CardText>
                        </CardBody>
                        <CardFooter>
                        <a href="https://github.com/nikv1811/tic-tac-toe"><Button color="warning">Code</Button></a></CardFooter>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Projects