import React from 'react'
import { View, Text } from 'react-native';
import Footer from '../component/footer'
import Icon from '../icons'
import Logo from '../resources/logo.png'
import "../pages/AboutUs.css";

export function FooterContainer() {
    return (
        <div>
            <a href="/" ><img className="logo_style" src={Logo} /></a>
            <Footer>
                <Footer.Wrapper>
                    <Footer.Row>
                        <Footer.Column>
                            <Footer.Title>About Us</Footer.Title>
                            <Footer.Link href="/about">What We do</Footer.Link>
                            <Footer.Link href="/about">Timeline</Footer.Link>
                            <Footer.Link href="/about">Team</Footer.Link>
                        </Footer.Column>

                        <Footer.Column>
                            <Footer.Title>Divisions</Footer.Title>
                            <Footer.Link href="/divisions/engineering">Engineering</Footer.Link>
                            <Footer.Link href="/divisions/finance">Finance</Footer.Link>
                            <Footer.Link href="/divisions/randw">Research & Writing</Footer.Link>
                            <Footer.Link href="/divisions/incubator">Incubator</Footer.Link>
                        </Footer.Column>

                        <Footer.Column>
                            <Footer.Title>Resources</Footer.Title>
                            <Footer.Link href="/resources/community">Community</Footer.Link>
                            <Footer.Link href="/resources/events">Events</Footer.Link>
                            <Footer.Link href="/resources/internships">Internships</Footer.Link>
                        </Footer.Column>

                        <Footer.Column>
                            <Footer.Title>Socials</Footer.Title>
                            <Footer.Link href="#"><Icon className="fa fa-instagram" />Instagram</Footer.Link>
                            <Footer.Link href="#"><Icon className="fab fa-linkedin-in" />LinkedIn</Footer.Link>
                            <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                            <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                        </Footer.Column>
                    </Footer.Row>
                </Footer.Wrapper>
            </Footer>
            <hr
                style={{
                    color: 'white',
                    width: '99.8vw',
                    height: "0.05px"
                }}
            />
            <div id="copytext" className="copy">
                <Text style={{ color: 'white' }}>Copyright © 2022. All Right Reserved.</Text>
            </div>
        </div>

    )
}