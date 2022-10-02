import React from 'react'
import CalendarContainer from '../containers/calendar/CalendarContainer'
import './Events.css'
import Event from '../resources/event.png'



function Events() {
  return (
    <div>
      <div className="title-style">
        <h1 className="title">Calendar</h1>
      </div>
      <div style={{ padding: "30px" }}>
        <CalendarContainer />
      </div>
      <div className="events-info-container">
        <h1 className='events-info-title'>Offered Events</h1>
        <p className='events-info-p'>Texas Blockchain Engineering is hosting Texas’ first multi-chain hackathon bringing together leading blockchain ecosystems for a week of learning, building, and exploring web3. Partcipants will kick-start new projects, explore job opportunities, and receive mentorship from industry leaders. Whether want to be a designer, developer, or community builder, Activate is designed to help you grow and experiment with blockchain together.</p>
        <div className="event-ind-container">
          <h1 className='event-title'><a style={{ textDecoration: "none" }} href='/'>Hackathons</a></h1>
          <div className='event-info-container'>
            <p className='event-pgraph-container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img className='event-info-img' src={Event} />
          </div>
        </div>
        <div className="event-ind-container">
          <h1 className='event-title'><a style={{ textDecoration: "none" }} href='/'>Finance Days</a></h1>
          <div className='event-info-container'>
            <div className='event-pgraph-container'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <img className='event-info-img' src={Event} />
          </div>
        </div>
        <div className="event-ind-container">
          <h1 className='event-title'><a style={{ textDecoration: "none" }} href='/'>Speaker Panels</a></h1>
          <div className='event-info-container'>
            <p className='event-pgraph-container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img className='event-info-img' src={Event} />
          </div>
        </div>
        <div className="event-ind-container">
          <h1 className='event-title'><a style={{ textDecoration: "none" }} href='/'>Conference</a></h1>
          <div className='event-info-container'>
            <p className='event-pgraph-container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img className='event-info-img' src={Event} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Events;