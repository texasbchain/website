import React, {useState} from 'react'
import './Card.css'
import ProfilePic from '../../resources/placeholder.png'
import { FaTwitter, FaInstagram, FaLinkedin} from "react-icons/fa";
import { BiMailSend} from "react-icons/bi"

const Card = ({name,job,about,twitterLink,instaLink,linkedLink,email,image}) => {

  return (
    <div className='Card'>
        <div className='upper-container'>
            <div className='image-container'>
                <img className="imgProfile" src={image} alt="" height="100px" width="100px" />
            </div>
        </div>
        <div className="lower-container">
            <p className="pgraphname"> {name} </p>
            <p className="pgraphjob"> {job}</p>
            <p className="pgraph"> {about}</p>
            <div className="icon-container">
                <a className="icon" href={twitterLink}><FaTwitter/></a>
                <a className="icon" href={instaLink}><FaInstagram/></a>
                <a className="icon" href={linkedLink}><FaLinkedin/></a>
                <a className="icon" href={email}><BiMailSend/></a>
            </div>

        </div>

    </div>
  )
}

export default Card