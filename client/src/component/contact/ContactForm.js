import React, {useState, useRef} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {contactConfig} from "./content_option";
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import emailjs from '@emailjs/browser'

const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        var dest = document.getElementById("email-dest").value;
        e.preventDefault();
        var name = document.getElementById("name").value;
        document.getElementById("name").value = "";
        var email = document.getElementById("email").value;
        document.getElementById("email").value = "";
        var message = document.getElementById("message").value;
        document.getElementById("message").value = "";
        if (!name) {
            toast.error("Please enter your name.");
        }
        else if (!email) {
            toast.error("Please enter your email.")
        }
        else if (!message) {
            toast.error("Please enter your message.");
        }
        else {
            if (dest === 'engineering@texasblockchain.org') {
                emailjs.sendForm('service_fpki3gv', 'template_i4z62bp', form.current, 'RWh6NnzqSj13ktrvD')
                .then((result) => {
                    console.log(result.text);
                    toast.success("We received your message and will be in touch shortly.")
                }, (error) => {
                    console.log(error.text);
                });
            }
            else if (dest === 'finance@texasblockchain.org') {
                emailjs.sendForm('service_l30a5ql', 'template_4q34wln', form.current, 'zKabVRnnfGQHYFjWF')
                .then((result) => {
                    console.log(result.text);
                    toast.success("We received your message and will be in touch shortly.")
                }, (error) => {
                    console.log(error.text);
                });
            }
            else if (dest === 'expansion@texasblockchain.org') {
                emailjs.sendForm('service_sg39wxc', 'template_wquthjp', form.current, 'W5BfZw4a_uq2ZL_-g')
                .then((result) => {
                    console.log(result.text);
                    toast.success("We received your message and will be in touch shortly.")
                }, (error) => {
                    console.log(error.text);
                });
            }
            else if (dest === 'marketing@texasblockchain.org') {
                emailjs.sendForm('service_xnqf2fc', 'template_q9hx97l', form.current, 'Otyq82bTzeDa-0Gxk')
                .then((result) => {
                    console.log(result.text);
                    toast.success("We received your message and will be in touch shortly.")
                }, (error) => {
                    console.log(error.text);
                });
            }
            else {
                emailjs.sendForm('service_3723dey', 'service_3723dey', form.current, 'rbCGi_LVwa5dF660k')
                .then((result) => {
                    console.log(result.text);
                    toast.success("We received your message and will be in touch shortly.")
                }, (error) => {
                    console.log(error.text);
                });
            }
        }
      };

  return (
    <div id="contactform">
        <ToastContainer position="bottom-center" limit={1}/>
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
                        <select className='jobs-filter-select' id='email-dest' name='email-dest'>
                            <option >txbchain@gmail.com</option>
                            <option >engineering@texasblockchain.org</option>
                            <option >finance@texasblockchain.org</option>
                            <option >expansion@texasblockchain.org</option>
                            <option >marketing@texasblockchain.org</option>
                        </select>
                    </address>
                    <br />
                        <br />
                    <p>{contactConfig.description}</p>
                </Col>
                <Col lg='7' className="d-flex align-items-center">
                    <form ref={form} onSubmit={sendEmail} className="contact__form w-100">
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