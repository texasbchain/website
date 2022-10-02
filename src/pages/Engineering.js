import React from 'react'
import './Engineering.css'
import blockchainImage from "../resources/blockchain-blog-image.jpeg";
import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline'
import { FaBug, FaRegCalendarCheck, FaRegFileAlt } from 'react-icons/fa'
import EngCarouselContainer from '../component/carousel/EngCarouselContainer';
import EngProject from '../component/project/EngProject';
import projImage from '../resources/engproj1.jpeg';
import Card from '../component/team/Card';
import kamilImage from '../resources/kamil.JPG'
import taqiImage from '../resources/taqi.jpg'
import furkanImage from '../resources/furkan.jpg'
import johannImage from '../resources/johann.jpeg'
import quai_logo from '../resources/quai_logov2.png'
import three_logo from '../resources/threeo.png'
import khoiImage from '../resources/khoi.jpeg'

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
        <h2 className='subtitle-eng'>Past Events</h2>
        <div className="carousel_sizing">
          <EngCarouselContainer />
        </div>
        <h2 className='subtitle-eng-not'>Notable Projects</h2>
        <div className="eng-projs-display">
          <div className="eng-proj-display">
            <EngProject
              title='ChainHub'
              imageUrl={projImage}
              body='This is my new project. How are you doing? Hope you are liking my project. By the way, my name is also Roshan Rajan. I am the person who is stuck building this website.' />
          </div>
          <div className="eng-proj-display">
            <EngProject
              title='Three0'
              imageUrl={three_logo}
              body="Three0 offers a suite of Web3 development tools in a familiar Web2 interface. Developers can use Three0's database, authentication, storage, and hosting services to build their own fully decentralized application without worrying about the jargon that Web3 is filled with." 
              link="https://three0dev.com/"/>
          </div>
          <div className="eng-proj-display">
            <EngProject
              title='Quai'
              imageUrl={quai_logo}
              body='Quai Network is able to achieve this impressive feat through a technology called merged mining. Merged mining is the process of mining two or more blockchains at the same time by sharing the amount of work found within the block header. Quai Network has combined merged mining with a hierarchical chain structure to achieve tps and throughput numbers dwarfing those of traditional L1s.' 
              link='https://quai.network/'
              />
          </div>
        </div>
        <h2 className='subtitle-eng'>Our Team</h2>
        <div className="cards">
          <div className="card-style">
            <Card name={'Kamil Kalowski'} image={kamilImage} job={'Head of R&D'} about={'Kamil is a junior majoring in CS. Kamil wanted to get into a technology that both disrupted the current state of fintech and increased people\'s interpersonal freedom after watching The Big Short, which delved into the 2008 housing market crash.'}  email={'kamilkalowski@utexas.edu'} twitterLink={'https://twitter.com/kamilkalowski'} instaLink={'https://www.instagram.com/kamilkalowski/'} linkedLink={'https://www.linkedin.com/in/kamil-kalowski-78b6211a1/'} />
          </div>
          <div className="card-style">
            <Card name={'Taqi Hossain'} image={taqiImage} job={'Head of DevOps'} about={'Taqi is junior majoring in CS. The sudden hype around blockchain is what initially drew Taqi in. What keeps him involved now is definitely the people. Everyone he has met in the space is forward-thinking, encouraging, and of course, honest in an honest majority.'} email={'taqi.hossain@gmail.com'}  instaLink={'https://www.instagram.com/taqisitos/'} linkedLink={'https://www.linkedin.com/in/taqi-hossain/'}/>
          </div>
          <div className="card-style">
          <Card name={'Furkan Yayla'} image={furkanImage} job={'Head of Media'} about={'Furkan is a junior majoring in CS. Furkan is interested in blockchain because of the opportunities it can provide, just by joining the org we got the idea to start a podcast: "The DeepDive" (shameless plug), host hackathons, and form a community of over 1,000 people!'} email={'fyayla@utexas.edu'} twitterLink={'https://twitter.com/Furkeazy'}  linkedLink={'https://www.linkedin.com/in/furkan-yayla-443532204/'}/>
          </div>
        </div>
        <div className="cards">
          <div className="card-style">
            <Card name={'Johann Ramirez'} image={johannImage} job={'DevOps Executive'} about={'Johann is a junior majoring in CS. Johann loves blockchain because he\'s excited by its potential to upheave the current systems in place that are based on centralization and no privacy; such as the handling of personal information, money, and even the internet.'} email={'johannramirez05@gmail.com'} twitterLink={'https://twitter.com/wavy_johann'} instaLink={'https://www.instagram.com/johannspencer/'} linkedLink={'https://www.linkedin.com/in/johann-ramirez'}/>
          </div>
          <div className="card-style">
            <Card name={'Khoi Nguyen'} image={khoiImage} job={'R&D Executive'} about={'Khoi is junior majoring in CS. Khoi is excited by the fact that blockchain is only in its early stages of adoption and the applications seem limitless.'} email={'khoi.t.nguy@gmail.com'} instaLink={'https://www.instagram.com/_khoi.nguyen_/'} linkedLink={'https://www.linkedin.com/in/khoi-nguyen-b520b31b8/'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Engineering