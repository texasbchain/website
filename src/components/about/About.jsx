import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className="strip">
            <h1 class="abouttitle"> About Us </h1>
            <div class="abouttext">
                <p class="aboutp"> We educate UT Austin about everything blockchain. Our finance and engineering-specific departments focus on providing the foundation and gateway for our members to explore the future of this space. </p>
                <p class="aboutp"> Through city-wide hackathons, socials, and all of our meetings, we aim to foster an incredible community of those eager and disciplined to engage with this space.</p>            </div>
            <div><button class="aboutbutton"> Contact Us </button></div>

        </div>
    );
}

export default About


