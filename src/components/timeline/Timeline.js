import React, { useEffect, useState } from 'react';
import "./Timeline.css";
import TweetBox from './TweetBox';
import Post from './Post';
import db from "../../firebase";
import { collection, getDocs, query, orderBy, onSnapshot } from "firebase/firestore";
import FlipMove from 'react-flip-move';

function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timestamp", "desc"));
    // getDocs(q).then((querySnapshots) => {
    //   setPosts(querySnapshots.docs.map((doc) => doc.data()))
    // });

    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  return (
    <div className='timeline'>
      <div className='timeline_header'>
        <h2>ホーム</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {posts.map((post) =>(
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  )
}

export default Timeline
