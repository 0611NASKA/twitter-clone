import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';
import "./TweetBox.css";
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase"

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) =>{
    e.preventDefault();

    addDoc(collection(db, "posts"),{
      displayName: "テストだよ",
      username: "bokudayo",
      verified: true,
      text: tweetMessage,
      avatar: "https://source.unsplash.com/random",
      image: tweetImage,
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox_input'>
          <Avatar src="https://source.unsplash.com/random" />
          <input
            value={tweetMessage}
            placeholder='いまどうしてる？'
            type='text'
            onChange={(e) => setTweetMessage(e.target.value)}
          ></input>
        </div>
        <input
          value={tweetImage}
          className='tweetBox_Imageinput'
          placeholder='画像のURLを入力してください'
          type='text'
          onChange={(e) => setTweetImage(e.target.value)}
        ></input>
        <Button className='tweetBox_tweetButton'
        type="submit"
        onClick={sendTweet}>
          ツイートする
        </Button>
      </form>
    </div>
  )
}

export default TweetBox
