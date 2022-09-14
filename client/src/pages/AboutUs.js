import React, { Component, useState } from 'react';
import { View, Text, Image } from 'react-native';
import "./AboutUs.css";
import {FooterContainer} from '../containers/footer';
import Timeline from '../component/timeline/Timeline';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from '../component/team/Card';
import armelImage from '../resources/armel.JPG'
import roshanImage from '../resources/roshan.PNG'
import jakeImage from '../resources/jake.jpeg'
import saviImage from '../resources/savi.jpeg'
import julianImage from '../resources/julian.JPG'
import eshaImage from '../resources/esha.jpg'
import bennettImage from '../resources/bennett.png'
import abeImage from '../resources/abe.jpg'
import anishImage from '../resources/anish.jpg'

function AboutUs() {

    return (
      <div>
        <h1 className="title">ABOUT TEXAS BLOCKCHAIN</h1>
        <div className="box">
          <div>
            <h2 className="subtitle" id='wwd'>WHO WE ARE</h2>
            <p className="pgraph_about">At Texas Blockchain,
            we are building the next generation of innovators by leading a community focused on the discussion and development of blockchain technology. We want to eventually bring people from all walks of life into crypto and help bring the decentralized future into fruition where each person has true sovereignty over their data, their finance, and ultimately their life.</p>
            <h3>WHAT WE DO</h3>
            <p><a className="bold">We empower.</a> Providing members with opporunities to learn not only about the technical side of crypto but also the financial applications.</p>
            <p><a className="bold">We create.</a> All activities at Texas Blockchain are centered around nurturing the innovative ideas that our members have.</p>
          </div>
          <div className="btn-placement">
            <button className="sbtn"><a style={{ textDecoration: "none", color: "#000" }} href="/">BY THE NUMBERS</a></button>
            <button className="sbtn"><a style={{ textDecoration: "none", color: "#000" }} href="/">CONTACT US</a></button>
          </div>
        </div>
        <Timeline />
        <h1 className='title'>Our Team</h1>
        <div className="cards">
          <div className="card-style">
            <Card name={'Armel Talla'} image={armelImage} job={'President'} about={'Armel is a junior majoring in CS and Math. He is looking to connect with students building the future of Web3.'} email={'armeltalla@utexas.edu'} twitterLink={'https://twitter.com/armelwtalla'} instaLink={'https://www.instagram.com/armeltalla/'} linkedLink={'https://www.linkedin.com/in/armeltalla/'} />
          </div>
          <div className="card-style">
            <Card name={'Roshan Rajan'} image={roshanImage} job={'Head of Engineering'} about={'Roshan is a junior majoring in ECE. He is excited to innovate using blockchain technology with TxB.'} email={'roshanrajan@utexas.edu'} twitterLink={'https://twitter.com/_roshanrajan_'} instaLink={'https://www.instagram.com/roshanrajan_/'} linkedLink={'https://www.linkedin.com/in/roshanrajan/'}/>
          </div>
          <div className="card-style">
            <Card name={'Jake Levy'} image={jakeImage} job={'Vice President'} about={'Jake is a sophomore majoring in MIS. He is looking to build upon our amazing community.'} email={'jakelevy30@gmail.com'} twitterLink={'https://twitter.com/iamjakelevy'} instaLink={'https://www.instagram.com/_jakelevy_/'} linkedLink={'https://www.linkedin.com/in/levy-jake/'}/>
          </div>
        </div>
        <div className="cards">
          <div className="card-style">
            <Card name={'Savi Wimalasooriya'} image={saviImage} job={'Head of Finance'} about={'Savi is a sophomore majoring in CS. Savi loves how diverse the TX Blockchain ecosystem is.'} email={'savinduw@utexas.edu'} twitterLink={'https://twitter.com/savi_eth'} instaLink={'https://www.instagram.com/savinduw/'} linkedLink={'https://www.linkedin.com/in/savindu-wimalasooriya-3782b220a/'}/>
          </div>
          <div className="card-style">
            <Card name={'Julian Saks'} image={julianImage} job={'Head of Expansion'} about={'Julian is a sophomore majoring in Economics. Julian loves collaborating with like-minded students in the blockchain space.'} email={'julian.saks@gmail.com'} twitterLink={'https://twitter.com/JulianSaks'} instaLink={'https://www.instagram.com/juliansaks/'} linkedLink={'https://www.linkedin.com/in/julian-saks-b4ab12221/'}/>
          </div>
          <div className="card-style">
            <Card name={'Anish Maddipoti'} image={anishImage} job={'Head of Marketing'} about={'Anish is currently a junior at UT Austin. As the Head of Marketing, he oversees the Discord, social media platforms, weekly newsletter, as well as the consulting team. He also works closely with the Expansion team to showcase sponsorships and student accomplishments.'} email={'anish.maddipoti@utexas.edu'} twitterLink={'https://twitter.com/athreesh'} instaLink={'https://www.instagram.com/anish_maddipoti/'} linkedLink={'https://www.linkedin.com/in/anish-maddipoti/'}/>
          </div>
        </div>
        <div className="cards">
          <div className="card-style">
            <Card name={'Esha Bora'} image={eshaImage} job={'Head of Research & Writing'} about={'Esha is a sophomore majoring in Public Health. Esha enjoys the diversity of opportunities available from coding all the way to writing.'} email={'esha.bora@utexas.edu'} twitterLink={'https://twitter.com/_eshabora'} instaLink={'https://www.instagram.com/esha_bora/'} linkedLink={'https://www.linkedin.com/in/eshabora/'}/>
          </div>
          <div className="card-style">
            <Card name={'Bennett Zeigler'} image={bennettImage} job={'Head of Engineering'} about={'Bennett is a sophomore majoring in ECE. Bennett loves to meet new members and teach them about the basics of Web3.'} email={'bennettziegler99@gmail.com'} twitterLink={''} instaLink={''} linkedLink={'https://www.linkedin.com/in/bennett-ziegler-41945521b/'}/>
          </div>
          <div className="card-style">
            <Card name={'Abe Woldenberg'} image={abeImage} job={'Head of Finance'} about={'Abe is a senior majoring in Finance. Abe says "Discovering blockchain and its capabilities, sparked and rekindled my love for consumer tech and product.'} email={'abewol01@gmail.com'} twitterLink={'https://twitter.com/0xawol'} instaLink={'https://www.instagram.com/awol6/'} linkedLink={'https://www.linkedin.com/in/abraham-woldenberg/'}/>
          </div>
        </div>
      </div>
    );
}

export default AboutUs;