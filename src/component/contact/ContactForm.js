import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {contactConfig} from "./content_option";

const ContactForm = () => {
  return (
    <div>
        <Container style={{color: "#fff", backgroundColor: "#001e40", borderRadius: "20px", paddingLeft: "3vw", paddingRight: "3vw", marginBottom: "30vh"}}>
            <Row >
                <Col lg='8' style={{textAlign: "center", margin: "auto", paddingTop: "20px", paddingBottom: "30px"}}>
                    <h1>
                        Contact Us
                    </h1>
                </Col>
            </Row>

            <Row className="sec-sp">
                <Col lg='5' className="mb-5">
                    <h3 className="color_sec py-4">Get in touch</h3>
                    <address>
                        <select className='jobs-filter-select' id='job-level' name='job-level'>
                            <option >Engineering</option>
                            <option >Finance</option>
                            <option >Expansion</option>
                            <option >Marketing</option>
                        </select>
                    </address>
                    <br />
                        <br />
                    <p>{contactConfig.description}</p>
                </Col>
                <Col lg='7' className="d-flex align-items-center">
                    <form className="contact__form w-100">
                        <Row>
                            <Col lg='6' className='form-group'>
                                <input style={{
                                        paddingTop: "1.5%",
                                        outline: "none", 
                                        color: "black", 
                                        marginRight: "0px",
                                        marginLeft: "0px",
                                        paddingRight: "0px",
                                        backgroundColor: "white"
                                }}
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    type="text"
                                    />
                            </Col>
                            <Col lg='6' className='form-group'>
                                <input style={{
                                        paddingTop: "1.5%",
                                        outline: "none", 
                                        color: "black", 
                                        marginRight: "0px",
                                        marginLeft: "0px",
                                        paddingRight: "0px",
                                        backgroundColor: "white"
                                }}
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    type="email"
                                    />
                            </Col>
                        </Row>
                        <textarea style={{
                            marginTop: "4vh", 
                            borderRadius: "10px", 
                            paddingRight: "7px",
                            paddingLeft: "7px",
                        }} 
                        className="form-control" 
                        id="message" 
                        name="message" 
                        placeholder="Enter Message here" 
                        rows='5'></textarea>
                        <Row>
                            <Col lg='12' className="form-group" style={{textAlign: "right", marginBottom: "20px"}}>
                                <button style={{marginLeft: "0px", color: "white", border: "1px solid"}}className="btn ac_btn" type="submit">Send</button>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ContactForm