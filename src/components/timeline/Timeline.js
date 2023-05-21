import React from 'react';
import "./Timeline.css";
import TweetBox from './TweetBox';
import Post from './Post';

function Timeline() {
  return (
    <div className='timeline'>
      <div className='timeline_header'>
        <h2>ホーム</h2>
      </div>

      <TweetBox />

      <Post
        displayName="テストだよ"
        user_name="bokudayo"
        verified={true}
        text="test"
        avatar=""
        image="https://source.unsplash.com/random"
      />
    </div>
  )
}

export default Timeline
