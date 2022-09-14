import React from 'react';
import './head.css';
import {Link} from 'react-scroll';

const Head = () => {
    return (
        <div className="strip" style={{paddingTop: "0%"}}>
            <h1 class="titletext">Educating the future of blockchain at UT Austin.</h1>
            <p class="headp">Through education and community, we are creating an ecosystem that produces innovative web3 projects and research.</p>
            <div class="btn"> <button class="headbutton highlighted"> <Link offset={-40} to='contactform'>Contact Us</Link></button> <button class="headbutton"><a style={{textDecoration: "none", color: "white"}}href="/resources/events">Next Meeting</a></button></div>
        </div>
    );
}

export default Head


