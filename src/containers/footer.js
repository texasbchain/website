import React from 'react'
import { View, Text } from 'react-native';
import {Link} from 'react-scroll';
import Footer from '../component/footer'
import Icon from '../icons'
import Logo from '../resources/logo.png'
import "../pages/AboutUs.css";
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaDiscord} from "react-icons/fa";


export function FooterContainer() {

    const youtubeClick = (e) =>  {
        e.preventDefault();
        toast.success("Our Youtube channel is coming soon!");
    }


    return (
        <div className="footer-display">
            <a href="/" ><img className="logo_style" src={Logo} /></a>
            <Footer>
                <Footer.Wrapper>
                    <Footer.Row>
                        <Footer.Column>
                            <Footer.Title>About Us</Footer.Title>
                            <Footer.Link href="/about">What We Do</Footer.Link>
                            <Footer.Link href="/about">Timeline</Footer.Link>
                            <Footer.Link href="/about">Team</Footer.Link>
                        </Footer.Column>

                        <Footer.Column>
                            <Footer.Title>Divisions</Footer.Title>
                            <Footer.Link href="/divisions/engineering">Engineering</Footer.Link>
                            <Footer.Link href="/divisions/finance">Finance</Footer.Link>
                            <Footer.Link href="/divisions/randw">Research & Writing</Footer.Link>
                            {/* <Footer.Link href="/divisions/incubator">Incubator</Footer.Link> */}
                        </Footer.Column>

                        <Footer.Column>
                            <Footer.Title>Resources</Footer.Title>
                            {/* <Footer.Link href="/resources/community">Community</Footer.Link> */}
                            <Footer.Link href="/resources/events">Events</Footer.Link>
                            <Footer.Link href="/resources/internships">Internships</Footer.Link>
                        </Footer.Column>

                        <Footer.Column>
                            <Footer.Title>Socials</Footer.Title>
                            <Footer.Link href="https://www.instagram.com/txblockchain/"><FaInstagram/> Instagram</Footer.Link>
                            <Footer.Link href="https://www.linkedin.com/company/texas-blockchain/"><FaLinkedin/> LinkedIn</Footer.Link>
                            <Footer.Link href="https://twitter.com/txblockchain"><FaTwitter/> Twitter</Footer.Link>
                            <Footer.Link href=""><FaYoutube/> Youtube</Footer.Link>
                            <Footer.Link href="https://discord.gg/XfJM5tTR8V"><FaDiscord/> Discord</Footer.Link>
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