import React, { useContext, useState, useEffect } from 'react';
import { CurrentUser } from '../contexts/CurrentUser';
import { useNavigate, useNavigation } from 'react-router-dom'

function Feed(data) {
  const [publishes, setPublishes] = useState([{
    username: '',
    pic: '',
    caption: ''   
}]);

  const [user, setUser] = useState({
    username: '',
});


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

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const response = await fetch(`http://localhost:4000/Users/`)
  //     const resData = await response.json()
  //     setUser(resData)
  //   }
  //   fetchUser();
  // }, []);

  // Barrier check if not logged in
  if (CurrentUser == null) {
    window.location.href = '/login'
  } else if (CurrentUser) {
    console.log('user live')
  }

  let publishOutput = publishes.map((publish) => {

    return (
      
      // <div className="col-sm-6" key={publish.publish_id}>
      <div className="col-sm-6" key={user.user_id}>
        <h2>
        {user.username}
          <a href="#" onClick={() => navigate(`/Publishes/${publish.publish_id}`)} >
            {publish.username}

          </a>
        </h2>

        <img style={{ maxWidth: 200 }} src={publish.pic} />
        <p className="text-center">
          {publish.caption}
          
        </p>
      </div>

    )

  })
  return (
    <main>
      {publishOutput}
      
      work
    </main>
  )
}

export default Feed;

