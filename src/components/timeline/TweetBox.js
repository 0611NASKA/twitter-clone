import { Avatar, Button } from '@mui/material'
import React from 'react'

function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
        <Avatar />
        <input placeholder='いまどうしてる？' type='text'></input>
        <input className='tweetBox_ImageInput' placeholder='画像のURLを入力してください' type='text'></input>
        <Button className='tweetBox_tweetButton' type="submit">ツイートする</Button>
      </form>
    </div>
  )
}

export default TweetBox
