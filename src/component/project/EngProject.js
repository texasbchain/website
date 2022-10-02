import React from 'react';
import './EngProject.css';

const EngProject = ({ title, imageUrl, body, link }) => {
    return (
        <div className='eng-project-container'>
            <div className='img-container'>
                <img src={imageUrl} alt='' style={{height: "250px", width: "400px"}}/>
            </div>
            <div className="eng-project-content">
                <div className="eng-project-title">
                    <h4>{title}</h4>
                </div>
                <div className="eng-project-body">
                    <p>{body}</p>
                </div>
                <div className="eng-project-btn">
                    <button><a style={{color: "#fff", textDecoration: "none"}}href={link}>Learn More</a></button>
                </div>

            </div>
        </div>
    )
}

export default EngProject