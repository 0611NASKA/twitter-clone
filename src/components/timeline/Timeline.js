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

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Timeline
