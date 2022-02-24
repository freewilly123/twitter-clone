import React, { useEffect, useState } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
//import db from './firebase'

function Feed() {
  //   const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     db.collection("posts").onSnapshot((snapshot) =>
  //       setPosts(snapshot.docs.map((doc) => doc.data()))
  //     );
  //   }, []);

  return (
    <div className='feed'>
      {/*Header  */}
      <div className='feed__header'>
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />
      {/* Post */}
      {/* {posts.map((post)=><Post displayName={post.displayName}
        userName={post.userName}
        verified={post.verified}
        text={post.text}
        avatar={post.avatar}
        image={post.image}/>)} */}
      <Post displayName="FreeWilly"
        userName="awesome"
        verified={true}
        text="Yo it's working"
        avatar="https://media.giphy.com/media/l2R09nTihqRi4fFzq/giphy.gif"
        image="https://media.giphy.com/media/3NtY188QaxDdC/giphy.gif" />

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      
      {/* Post */}
      {/* Post */}
    </div>
  )
}

export default Feed