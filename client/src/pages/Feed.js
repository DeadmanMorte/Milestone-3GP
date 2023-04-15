import React, { useContext, useState, useEffect } from 'react';
import { CurrentUser } from '../contexts/CurrentUser';
import { useNavigate, useNavigation } from 'react-router-dom'

function Feed(data) {
  const [publishes, setPublishes] = useState([]);

  const [users, setUsers] = useState([]);


  const { setCurrentUser } = useContext(CurrentUser)

  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchPublishes = async () => {
  //     const response = await fetch(`http://localhost:4000/Publishes/`)
  //     const resData = await response.json()
  //     setPublishes(resData)
  //   }
  //   fetchPublishes();
  // }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`http://localhost:4000/users/`)
      const resData = await response.json()
      setUsers(resData)
    }
    fetchUser();
  }, []);

  // Barrier check if not logged in
  if (CurrentUser == null) {
    window.location.href = '/login'
  } else if (CurrentUser) {
    console.log('user live')
  }

  let userOutput = users.map((user) => {

    return (
      
      // <div className="col-sm-6" key={publish.publish_id}>
      <div className="col-sm-6" key={user.user_id}>
        <h2>
        {user.username}
          <a href="#" onClick={() => navigate(`/users/${user.user_id}`)} >
            {user.email}

          </a>
        </h2>

        {/* <img style={{ maxWidth: 200 }} src={publish.pic} /> */}
        <p className="text-center">
          {user.firstname}
          {user.lastname}
        </p>
      </div>

    )

  })
  return (
    <main>
      {userOutput}
      
      
    </main>
  )
}
// let publishOutput = publishes.map((publish) => {

//   return (
    
//     // <div className="col-sm-6" key={publish.publish_id}>
//     <div className="col-sm-6" key={user.user_id}>
//       <h2>
//       {user.username}
//         <a href="#" onClick={() => navigate(`/Publishes/${publish.publish_id}`)} >
//           {user.username}

//         </a>
//       </h2>

//       <img style={{ maxWidth: 200 }} src={publish.pic} />
//       <p className="text-center">
//         {publish.caption}
//         {publish.like}
//       </p>
//     </div>

//   )

// })
// return (
//   <main>
//     {publishOutput}
    
    
//   </main>
// )
// }
export default Feed;


