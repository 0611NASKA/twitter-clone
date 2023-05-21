import { Search } from '@mui/icons-material'
import React from 'react'
import { 
  TwitterTimelineEmbed, 
  TwitterShareButton,  
  TwitterTweetEmbed, 
} from 'react-twitter-embed';
import "./Widgets.css"

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets_input'>
        <Search className='widgets_searchIcon' />
        <input placeholder='キーワード検索' type='text' />
      </div>

      <div className='widgets_widgetContainer'>
        <h2>いまどうしてる？</h2>

        <TwitterTweetEmbed tweetId={"1660231459721089024"} />

        <TwitterTimelineEmbed 
          sourceType='profile' 
          screenName='IdentityVJP'
          options={{height: 400}}
        />

        <TwitterShareButton
          url={"https://twitter.com/IdentityVJP"}
          options={{ text: "#Reactの勉強", via: "IdentityVJP"}}
        />
      </div>
    </div>
  )
}

export default Widgets
