import './TweetBox.css'

import React from 'react'
import {Avatar, Button } from '@mui/material'

function TweetBox() {
    return (
        <div className='tweetBox' >
            <form>
                <div className ='tweetBox__input'>
                    <Avatar />
                    <input placeholder="What's happening?" type="text"></input>
                    
                </div>
                <input 
                placeholder="Optional:Enter image URL" 
                type="text"
                className='tweetBox__imageInput'></input>
               <Button className='tweetBox__tweetButton'>Tweet</Button> 
            </form>

        </div>
    )
}

export default TweetBox