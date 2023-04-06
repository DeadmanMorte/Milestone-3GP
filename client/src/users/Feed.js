import React, { useState, useEffect } from 'react';
import { CurrentUser } from '../contexts/CurrentUser';
import LoginForm from './LoginForm';

function PostList() {
  const [posts, setPosts] = useState([]);
  const { setCurrentUser } = useContext(CurrentUser)

  useEffect(() => {
    
    if (CurrentUser == null || !CurrentUser){
      return <LoginForm/>
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
