import React, { useContext, useState, useEffect } from 'react';
import { CurrentUser } from '../contexts/CurrentUser';
import { useNavigate, useNavigation } from 'react-router-dom'
import editPublish from '../publishes/editPublish';


import './feed.css'

function Feed(data) {
  const [publishes, setPublishes] = useState([{
    username: '',
    pic: '',
    caption: ''   
}]);

  


  const { setCurrentUser } = useContext(CurrentUser)

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPublishes = async () => {
      const response = await fetch(`http://localhost:4000/publishes/`)
      const resData = await response.json()
      setPublishes(resData)
    }
    fetchPublishes();
  }, []);



  // Barrier check if not logged in
  if (CurrentUser == null) {
    window.location.href = '/'
  } else if (CurrentUser) {
    console.log('user live')
  }

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
      <div>
      <a href="#" onClick={() => navigate(`/Publishes/addPublish`)} >add</a>
       <div className="col-sm-6" key={publish.publish_id}>
       
        <h2>
          <a className='btn btn-warning' onClick={()=> navigate(`/editPublish`)}>Edit</a>
        
          <a href="#" onClick={() => navigate(`/Publishes/${publish.publish_id}`)} >
            
            {publish.username}
          
          </a>
        
        </h2>

        <img style={{ maxWidth: 200 }} src={publish.pic} />
        <p className="text-center">
          {publish.caption}
          
        </p>
        <a href="#" onClick={() => navigate(`/publishes/addComment`)} >add a Comment</a>
      </div>
</div>
    )

  })
  return (
    <main>
      {publishOutput}
      
      
    </main>
  )
  return(
    <div>
      <a href="#" onClick={() => navigate(`/Publishes/addPublish`)} ></a>
    </div>
  )
}

export default Feed;

