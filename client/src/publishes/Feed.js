import React, { useContext, useState, useEffect } from 'react';
import { CurrentUser } from '../contexts/CurrentUser';

//show all publishes
function Feed() {
  const [posts, setPosts] = useState([]);

  const { setCurrentUser } = useContext(CurrentUser)

  useEffect(() => {

    const fetchPosts = async () => {
      const response = await fetch(`http:localhost:5000/publishes`)
      const resData = await response.json()
      setPosts(resData)
    } 
    fetchPosts();

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
        <div key={post.publish_id}>
          <h3>{post.username}</h3>
          <img src={post.pic} alt="" />
          <p>{post.caption}</p>
          <h1>{post.like}</h1>
        </div>
      ))}
    </div>
  );
}

export default Feed;

  // let postsFormatted= posts.map((post) => {
  //   return (
  //     <div className="col-sm-6" key={post.publish_id}>
	// 			<h2>
	// 				<a href="#" onClick={() => window.location.href = `/publishs/${post.publish_id}`} >
	// 					{posts.username}
	// 				</a>
	// 			</h2>
	// 			<p className="text-center">
	// 				{posts.caption}
	// 			</p>
	// 			<img style={{ maxWidth: 200 }} src={posts.pic} alt={posts.caption} />
	// 			<p className="text-center">
	// 				Liked by {posts.like}
	// 			</p>
	// 		</div>
  //   )
  // })
