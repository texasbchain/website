import React from 'react'
import Blue from '../resources/image2.jpg'
import EngProject from '../component/project/EngProject'
import './Incubator.css'

const Incubator = () => {
  return (
    <div>
      <div className="title-style" style={{ color: "#fff" }}>
        <h1 className="title">About <a style={{ color: "#D0CA3F" }}>Incubator</a></h1>
      </div>
      <div className="inc-intro-pgraph-container">
        <p className="inc-intro-pgraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod quis viverra nibh cras pulvinar mattis nunc. Nullam vehicula ipsum a arcu cursus vitae. In iaculis nunc sed augue lacus viverra. Ut pharetra sit amet aliquam. Viverra aliquet eget sit amet. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Non pulvinar neque laoreet suspendisse interdum. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Dignissim sodales ut eu sem. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Sed libero enim sed faucibus turpis in eu mi bibendum. Sit amet purus gravida quis blandit turpis. Nibh ipsum consequat nisl vel.</p>
      </div>
      <h2 className='subtitle-eng-not'>Startups produced at Texas Blockchain</h2>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", justifyContent: "space-evenly" }}>
        <EngProject title='First Startup from TxB' imageUrl={Blue} body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
        <EngProject title='First Startup from TxB' imageUrl={Blue} body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
      </div>
    </div>
  )
}

export default Incubator;