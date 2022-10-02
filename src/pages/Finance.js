import React from 'react'
import SideImage from '../resources/sidefin.png'
import FinanceCarouselContainer from '../component/carousel/FinanceCarouselContainer'
import EngProject from '../component/project/EngProject';
import projImage from '../resources/engproj1.jpeg';
import Card from '../component/team/Card';
import './Finance.css';

const Finance = () => {
  return (
    <div>
      <div className="title-style" style={{ color: "#fff" }}>
        <h1 className="title">About <a style={{ color: "#3E82FC" }}>Finance</a></h1>
      </div>
      <div style={{ zIndex: '1', color: "#fff", textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2vw' }}>
        <p className="fin-main-intro" style={{ width: '40vw' }}>Texas Blockchain Finance is educating our students on the subcategories within Defi and having them compare/contrast protocols to one another. As we cover each subdivision within Defi, students will eventually have productive and educational debates to incorporate specific protocols into their portfolios. As students are more able to understand this cutting-edge technology and how to invest in the right companies, they not only benefit themselves but can also educate their friends on campus and even their families on what Web3 is and how to invest in blockchain technology.</p>
      </div>
      <div style={{ paddingTop: "20vh", paddingBottom: "20vh", color: "#fff", flexDirection: "column", display: 'flex' }}>
        <h2 style={{ zIndex: '1', textAlign: 'center', paddingBottom: '5vh' }}>Investment Analysis Team</h2>
        <div style={{ display: 'flex', textAlign: 'center' }}>
          <img className="sideimg" src={SideImage} />
          <div className="inv-blurb" style={{ zIndex: '2', paddingRight: '3vw', paddingLeft: '3vw', height: '24vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
            <h3 style={{ fontWeight: '500', fontSize: '2vw', textAlign: 'center', zIndex: '1' }}>Bridge the Gap between Finance and Crypto</h3>
            <p className="inv-pgraph" style={{ paddingLeft: '2.3vw', width: '45vw', textAlign: 'center', zIndex: '2' }}>
              The Finance Division will seek to partner with other investment and trading organizations, including the UT Quantitative Trading Club, to work together to effectively and appropriately raise, create and manage a LIVE portfolio. Providing Finance members with experience in other facets of trading and investing will help bootstrap their abilities to carry out due diligence and risk assessment more accurately and effectively.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button style={{ marginRight: '1.5vw', backgroundColor: "#0368FF", paddingTop: '1vw', paddingBottom: '1vw', paddingLeft: '2vw', paddingRight: '2vw', borderRadius: '1rem', fontWeight: '500', color: '#fff' }}>Join Us</button>
              <button style={{ marginLeft: '1.5vw', color: '#0368FF', fontWeight: '500', background: 'transparent', border: 'none' }}>Contact Us </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="fin-sub" style={{ marginTop: '10vh', color: "#fff", textAlign: 'center', paddingBottom: '5vh' }}>Finance Days</h2>
        <p className="fin-main-intro" style={{ color: "#fff", width: '45vw', margin: 'auto', textAlign: 'center', paddingBottom: '10vh' }}>
          The Finance Division will seek to partner with other investment and trading organizations, including the UT Quantitative Trading Club, to work together to effectively and appropriately raise, create and manage a LIVE portfolio. Providing Finance members with experience in other facets of trading and investing will help bootstrap their abilities to carry out due diligence and risk assessment more accurately and effectively.
        </p>
        <div className='carousel_sizing' style={{ marginBottom: "10vh" }}>
          <FinanceCarouselContainer />
        </div>

        <div className="eng-projs-display" style={{ color: "#000" }}>
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

      </div>

    </div>
  )
}

export default Finance