import React, { useContext, useState, useEffect } from 'react';
import { CurrentUser } from '../src/contexts/CurrentUser';
import LoginForm from '../src/users/LoginForm';

function PostList() {
  const [posts, setPosts] = useState([]);
  const { setCurrentUser } = useContext(CurrentUser)

  useEffect(() => {
    const fetchData = async()=>{
      const response = await fetch(`http://localHost:4000/publishes`)
      const resData = await response.json()
      setPosts(resData)
    }
    fetchData()
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default PostList;
