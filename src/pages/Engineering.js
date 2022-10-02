import React from 'react'
import './Engineering.css'
import blockchainImage from "../resources/blockchain-blog-image.jpeg";
import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline'
import { FaBug, FaRegCalendarCheck, FaRegFileAlt } from 'react-icons/fa'
import EngCarouselContainer from '../component/carousel/EngCarouselContainer';
import EngProject from '../component/project/EngProject';
import projImage from '../resources/engproj1.jpeg';
import Card from '../component/team/Card';

const Engineering = () => {
  return (
    <div className="eng">
      <div className="title-style">
        <h1 className="title">About Engineering</h1>
      </div>
      <div className="main-info">
        <div className="pgraph-eng-container">
          <p className="pgraph-eng">Our engineering meetings aim to teach students how to read and eventually code their own smart contracts. To give students the tools to go from zero to hero as a developer, we believe in a strong foundation that starts by teaching the fundamental technical aspects of blockchain. From consensus mechanisms, cryptography, and mining to building and deploying smart contracts in Rust and Solidity, our engineering students can get a feel for it all. </p>
        </div>
      </div>
      <div>
        <h2 className='subtitle-eng'>Development Operations Pathway</h2>
        <div className="timeline-display">
          <Timeline minEvents={5} placeholder>
            <TimelineEvent
              icon={FaRegFileAlt}
              title='Em rascunho'
              subtitle='26/03/2019 09:51'
            />
            <TimelineEvent
              color='#87a2c7'
              icon={FaRegCalendarCheck}
              title='Agendado'
              subtitle='26/03/2019 09:51'
            />
            <TimelineEvent
              color='#9c2919'
              icon={FaBug}
              title='Erro'
              subtitle='26/03/2019 09:51'
            // action={{
            //   label: 'Ver detalhes...',
            //   onClick: () => window.alert('Erro!')
            // }}
            />
          </Timeline>
        </div>
      </div>
      <div>
        <h2 className='subtitle-eng'>Research & Development Pathway</h2>
        <div className="timeline-display">
          <Timeline minEvents={5} placeholder>
            <TimelineEvent
              icon={FaRegFileAlt}
              title='Em rascunho'
              subtitle='26/03/2019 09:51'
            />
            <TimelineEvent
              color='#87a2c7'
              icon={FaRegCalendarCheck}
              title='Agendado'
              subtitle='26/03/2019 09:51'
            />
            <TimelineEvent
              color='#9c2919'
              icon={FaBug}
              title='Erro'
              subtitle='26/03/2019 09:51'
              action={{
                label: 'Ver detalhes...',
                onClick: () => window.alert('Erro!')
              }}
            />
          </Timeline>
        </div>
        <h2 className='subtitle-eng'>Upcoming Events</h2>
        <div className="carousel_sizing">
          <EngCarouselContainer />
        </div>
        <h2 className='subtitle-eng-not'>Notable Projects</h2>
        <div className="eng-projs-display">
          <div className="eng-proj-display">
            <EngProject
              title='Project Name'
              imageUrl={projImage}
              body='This is my new project. How are you doing? Hope you are liking my project. By the way, my name is also Roshan Rajan. I am the person who is stuck building this website.' />
          </div>
          <div className="eng-proj-display">
            <EngProject
              title='Project Name'
              imageUrl={projImage}
              body='This is my new project. How are you doing? Hope you are liking my project. By the way, my name is also Roshan Rajan. I am the person who is stuck building this website.' />
          </div>
          <div className="eng-proj-display">
            <EngProject
              title='Project Name'
              imageUrl={projImage}
              body='This is my new project. How are you doing? Hope you are liking my project. By the way, my name is also Roshan Rajan. I am the person who is stuck building this website.' />
          </div>
        </div>
        <h2 className='subtitle-eng'>Our Team</h2>
        <div className="cards">
          <div className="card-style">
            <Card name={'Roshan Rajan'} job={'Head of Engineering'} about={'Nulla mauris velit, commodo lobortis neque a, molestie eleifend nulla. Nulla vel ullamcorper est. Suspendisse ut lacus.'} />
          </div>
          <div className="card-style">
            <Card name={'Roshan Rajan'} job={'Head of Engineering'} about={'Nulla mauris velit, commodo lobortis neque a, molestie eleifend nulla. Nulla vel ullamcorper est. Suspendisse ut lacus.'} />
          </div>
          <div className="card-style">
            <Card name={'Roshan Rajan'} job={'Head of Engineering'} about={'Nulla mauris velit, commodo lobortis neque a, molestie eleifend nulla. Nulla vel ullamcorper est. Suspendisse ut lacus.'} />
          </div>
        </div>
        <div className="cards">
          <div className="card-style">
            <Card name={'Roshan Rajan'} job={'Head of Engineering'} about={'Nulla mauris velit, commodo lobortis neque a, molestie eleifend nulla. Nulla vel ullamcorper est. Suspendisse ut lacus.'} />
          </div>
          <div className="card-style">
            <Card name={'Roshan Rajan'} job={'Head of Engineering'} about={'Nulla mauris velit, commodo lobortis neque a, molestie eleifend nulla. Nulla vel ullamcorper est. Suspendisse ut lacus.'} />
          </div>
          <div className="card-style">
            <Card name={'Roshan Rajan'} job={'Head of Engineering'} about={'Nulla mauris velit, commodo lobortis neque a, molestie eleifend nulla. Nulla vel ullamcorper est. Suspendisse ut lacus.'} />
          </div>
        </div>
        <div className="cards">
          <div className="card-style">
            <Card name={'Roshan Rajan'} job={'Head of Engineering'} about={'Nulla mauris velit, commodo lobortis neque a, molestie eleifend nulla. Nulla vel ullamcorper est. Suspendisse ut lacus.'} />
          </div>
          <div className="card-style">
            <Card name={'Roshan Rajan'} job={'Head of Engineering'} about={'Nulla mauris velit, commodo lobortis neque a, molestie eleifend nulla. Nulla vel ullamcorper est. Suspendisse ut lacus.'} />
          </div>
          <div className="card-style">
            <Card name={'Roshan Rajan'} job={'Head of Engineering'} about={'Nulla mauris velit, commodo lobortis neque a, molestie eleifend nulla. Nulla vel ullamcorper est. Suspendisse ut lacus.'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Engineering