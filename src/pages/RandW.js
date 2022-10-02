import React from 'react'
import './RandW.css';
import siderw from '../resources/siderw.png';
import Post from '../component/post/Post';
import profilePic from '../resources/placeholder.png';
import postImage from '../resources/postimage.png';

const RandW = () => {
  return (
    <div>
      <div className="title-style" style={{ color: "#fff" }}>
        <h1 className="title">About <a style={{ color: "#EF3434" }}>Research and Writing</a></h1>
      </div>
      <div className="rw-intro-pgraph-container">
        <p className="rw-intro-pgraph">To further facilitate recognition and understanding of the concepts taught to our members, we emphasize the importance of writing to create a weekly editorial that covers emergent trends, news, new product releases, and an analysis/case study of a Web3 product. Finance members will write on a topic of their choosing. The top 5-10 members of each Finance Club cohort will be rewarded through various incentives as they become long-term contributors to the club and help facilitate the educational aspirations of the organization to future members.</p>
      </div>
      <div className="rw-team-container">
        <h2 className="rw-team-subtitle-1">How to get involved with research and writing at Texas Blockchain</h2>
        <div className="rw-team-info">
          <div className="rw-team-left-container">
            <h3 style={{ paddingBottom: '1vh' }}>Create your own Content</h3>
            <p>As a member of our research and writing division, learn about different emerging topics in web3. Pick the one that interests you and create your own publication. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. You will be able to create reputable content that will be accessible by other students, our sponsors, and potentially land research internships. You can check out some of your fellow members' work on the <a className="link" href="/resources/community">Community</a> page.</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button style={{ marginRight: '1.5vw', backgroundColor: "#EF3434", paddingTop: '1vw', paddingBottom: '1vw', paddingLeft: '2vw', paddingRight: '2vw', borderRadius: '1rem', fontWeight: '500', color: '#fff' }}>Join Us</button>
              <button style={{ marginLeft: '1.5vw', color: '#EF3434', fontWeight: '500', background: 'transparent', border: 'none' }}>Contact Us </button>
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
          <Post profileimageUrl={profilePic} postUrl='/community' name='Roshan Rajan' date='August 10, 2022' title='Featured Post #1' body='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.' bodyimageurl={postImage} />
          <Post profileimageUrl={profilePic} postUrl='/community' name='Roshan Rajan' date='August 10, 2022' title='Featured Post #1' body='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.' bodyimageurl={postImage} />
          <Post profileimageUrl={profilePic} postUrl='/community' name='Roshan Rajan' date='August 10, 2022' title='Featured Post #1' body='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.' bodyimageurl={postImage} />
        </div>
      </div>
    </div>
  )
}

export default RandW