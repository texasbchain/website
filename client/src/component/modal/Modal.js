import React from 'react'
import './Modal.css'
import partnerImage from '../../resources/image1.jpg'

function Modal({closeModal, sponsorsShow, body, title}) {

    function ridModal() {
        closeModal(false);
        sponsorsShow(true);
    }


  return (
    <div className="modal-background">
        <div className="modal-container">
            <button onClick={ridModal}className="modal-close-btn"> X </button>
            <div className="modal-title" style={{color: "black"}}>
                <h1>{title}</h1>
            </div>
            <div className="modal-body">
                <div className="modal-pgraph-container">
                    <p>{body}</p>
                </div>
                <img src={partnerImage} style={{width: "37%"}}/>
            </div>
            <div className="modal-footer">
                <button className="modal-learn-btn">Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Modal