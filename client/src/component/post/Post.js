import React from 'react';
import './Post.css';

const Post = ({ title, body, bodyimageurl, profileimageUrl, name, date, postUrl }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='post-main'>
                <div className="post-upper">
                    <img className="post-upper-img" src={profileimageUrl} alt='' />
                    <div className='post-upper-text'>
                        <h1 className="post-upper-name">{name}</h1>
                        <p className="post-upper-date">{date}</p>
                    </div>
                </div>
                <div className="post-lower">
                    <div className="post-lower-left-text">
                        <h2 className="post-title"><a className="post-title" href={postUrl}>{title}</a></h2>
                        <p className="post-body">{body}</p>
                    </div>
                    <div className="post-lower-right-img">
                        <img style={{ width: "100%", height: "97.5%" }} src={bodyimageurl} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;