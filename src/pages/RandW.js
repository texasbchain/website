import React from 'react'
import './RandW.css';
import siderw from '../resources/siderw.png';
import Post from '../component/post/Post';
import profilePic from '../resources/placeholder.png';
import postImage from '../resources/postimage.png';
import solana_logo from '../resources/solana_logo.png'
import quai_logo from '../resources/quai_logov2.png'
import cry_rus_ukr from '../resources/crypto_russia_ukr.jpeg'
import arweave_logo from '../resources/arweave.jpg'
import curve_post from '../resources/curve_post.png'
import {Linking} from 'react-native'

const RandW = () => {

  const openMail = (e) => {
    e.preventDefault();
    Linking.openURL('mailto:eshabora@utexas.edu?subject=Research and Writing Inquiry')
}

  return (
    <div>
      <div className="title-style" style={{ color: "#fff" }}>
        <h1 className="title">About <a style={{ color: "#EF3434" }}>Research and Writing</a></h1>
      </div>
      <div className="rw-intro-pgraph-container">
        <p className="rw-intro-pgraph">To further facilitate recognition and understanding of the concepts taught to our members, we emphasize the importance of writing to create a weekly editorial that covers emergent trends, news, new product releases, and an analysis/case study of a Web3 product. Finance members will write on a topic of their choosing. The top members of each Finance Club cohort will be rewarded through various incentives as they become long-term contributors to the club and help facilitate the educational aspirations of the organization to future members.</p>
      </div>
      <div className="rw-team-container">
        <h2 className="rw-team-subtitle-1">How to get involved with research and writing at Texas Blockchain</h2>
        <div className="rw-team-info">
          <div className="rw-team-left-container">
            <h3 style={{ paddingBottom: '1vh' }}>Create your own Content</h3>
            <p>As a member of our research and writing division, learn about different emerging topics in Web3 by creating your own publication. Research and writing have not only survived five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. You will be able to create reputable content that will be accessible by other students, our sponsors, and potentially land research internships. You can check out some of your fellow members' work on the <a className="link" href="/resources/community">Community</a> page.</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button style={{ marginRight: '1.5vw', backgroundColor: "#EF3434", paddingTop: '1vw', paddingBottom: '1vw', paddingLeft: '2vw', paddingRight: '2vw', borderRadius: '1rem', fontWeight: '500', color: '#fff' }}>Join Us</button>
              <button onClick={openMail} style={{ marginLeft: '1.5vw', color: '#EF3434', fontWeight: '500', background: 'transparent', border: 'none' }}>Contact Us </button>
            </div>
          </div>
          <div className="rw-team-right-contianer">
            <img className="rw-team-img" src={siderw} />
          </div>
        </div>
      </div>
      <div>
        <h2 className='rw-team-subtitle-2'>Featured Posts</h2>
        <div className='featured-posts-container'>
          <Post profileimageUrl={profilePic} postUrl='/community' name='Julian Saks' date='January 22, 2022' title='Solana - Scalable Networks Redefined' body='Since its ICO in 2020, there is no doubt that Solana has placed itself within the market as a respectable blockchain alternative allowing for high scalability, transparency, and immutability. Despite its short-term price fluctuations, one must not be persuaded to ignore Solana’s rapid ecosystem growth. I believe that the Solana network has an unbelievable structure allowing for seamless scalability and adoption by other developers who have developed Dapps of sufficient utility. Ultimately, I am excited to see how Solana develops, as so does the crypto market, and until an alternative layer 1 solution rolls out with enhanced scalability while maintaining network security and decentralization, Solana is high on my watchlist for 2022 and years to come!' bodyimageurl={solana_logo} />
          <Post profileimageUrl={profilePic} postUrl='/community' name='Texas Blockchain' date='January 18, 2022' title='Quai Network: Proof of Work Reimagined' body='Quai Network is able to achieve this impressive feat through a technology called merged mining. Merged mining is the process of mining two or more blockchains at the same time by sharing the amount of work found within the block header. Quai Network has combined merged mining with a hierarchical chain structure to achieve tps and throughput numbers dwarfing those of traditional L1s.' bodyimageurl={quai_logo} />
          <Post profileimageUrl={profilePic} postUrl='/community' name='Aryan Panjwani' date='April 16, 2022' title='Crypto in the Russian-Ukraine War' body='Each day, we consume countless hours of information through the internet using our phones, televisions, and laptops. Being just over two weeks since the beginning of the Russia-Ukraine War, most of us have seen images or read pieces covering the war-torn country and the physical damages resulting from this conflict. Lesser known is the economic war fueled by sanctions and algorithmic digital currencies between western powers and Russia. The growing influence of bitcoin and other cryptos in the global political and economic atmosphere is undeniable.' bodyimageurl={cry_rus_ukr} />
        </div>
      </div>
    </div>
  )
}

export default RandW