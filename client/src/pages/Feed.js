import React, { useContext, useState, useEffect } from 'react';
import { CurrentUser } from '../contexts/CurrentUser';
import { useNavigate, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar';
import editPublish from '../publishes/editPublish';


import './feed.css'

function Feed(data) {
  const [publishes, setPublishes] = useState([{
    username: '',
    pic: '',
    caption: ''
  }]);

  const [users, setUsers] = useState({
    firstname: '',
    username: '',
  });

  const { currentUser } = useContext(CurrentUser)

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPublishes = async () => {
      const response = await fetch(`http://localhost:4000/publishes`)
      const resData = await response.json()
      setPublishes(resData)
    }
    fetchPublishes();
  }, []);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const response = await fetch(`http://localhost:4000/users/`)
  //     const resData = await response.json()
  //     setUsers(resData)
  //   }
  //   fetchUsers();
  // }, []);

 

  let publishOutput = publishes.map((publish) => {

    // if(CurrentUser.username === publish.username){
    //   <a className='btn btn-warning' onClick={()=> navigate(`/Publishes/${editPublish}`)}>Edit</a>
    // }
    // let addPublishButton = null

    // if (CurrentUser){
    //   addPublishButton = (
    //     <li>
    //       <a href="#" onClick={() => navigate(`/Publishes/addPublish`)} >add</a>
    //     </li>
    //   )
    // }

    return (
      <main>
        <div className='publish-container'>
          <a href="" onClick={() => navigate('/publishes/new')} >add publish</a>
          <div className="col-sm-6" key={publish.publish_id}>

            <h2>
              <a className='btn btn-warning' onClick={() => navigate(`/publishes/${publish.publish_id}/edit`)}>Edit</a>
              <div className='publish-title'>
              <a href="" onClick={() => navigate(`/publishes/${publish.publish_id}`)} >

                {publish.username}

              </a>
              </div>
            </h2>

            <img style={{ maxWidth: 200 }} src={publish.pic} />
            <p className="publish-caption">
              {publish.caption}

            </p>
            <a href="" onClick={() => navigate(`/publishes/comment`)} >add a Comment</a>
          </div>
        </div>
      </main>
    )

  })
  return (
    <main>
      <h1>FEED</h1>
      {publishOutput}


    </main>
  )
  
}

export default Feed;

