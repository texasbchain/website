import React from 'react';
import './mission.css';

const Mission = () => {
    return (
        <div className="strip">
            <h1 class="missiontitle"> Mission Statement </h1>
            <div class="missiontext">
                <p class="missionp"> Texas Blockchain is a group of students at UT Austin exploring blockchain technology, and we are bringing adoption and education to campus by driving a community from the ground up. </p>
                <p class="missionp"> We are building the next generation of innovators, guiding the discussion and development of emerging technology to create cognizance and competence for all members through dedicated finance, engineering, and incubation tracks. </p>
                <p class="missionp"> Texas Blockchain is the Web3 educational outlet students on campus need. </p>
            </div>
            <div><button class="missionbutton highlighted"><a style={{textDecoration: "none", color: "#fff"}}href='/about'>Our Values</a></button></div>
        </div>
    );
}

export default Mission


