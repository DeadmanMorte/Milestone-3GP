import React, { useContext, useState, useEffect } from 'react';
import { CurrentUser } from '../contexts/CurrentUser';
import LoginForm from './LoginForm';

function PostList() {
  const [posts, setPosts] = useState([]);
  const { setCurrentUser } = useContext(CurrentUser)

  useEffect(() => {
    
    	// Barrier check if not logged in
    if (CurrentUser == null ){
      window.location.href = '/login'
    } else if (CurrentUser) {
        console.log('user live')
    }

  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.user_id}>
          <h3>{post.username}</h3>
          <img src={post.pic} alt="" />
          <p>{post.caption}</p>
          <h1>{post.like}</h1>
        </div>
      ))}
    </div>
  );
}

export default PostList;
