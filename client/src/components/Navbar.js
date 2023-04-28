import { useContext }from 'react';
import { CurrentUser } from "../contexts/CurrentUser";

import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate()

  const { currentUser } = useContext(CurrentUser)

  let loginActions = (
      <>
          <li style={{ float: 'right' }}>
              <a href="#" onClick={() => navigate("/sign-up")}>
                  Sign Up
              </a>
          </li>
          <li style={{ float: 'right' }}>
              <a href="#" onClick={() => navigate("/login")}>
                  Login
              </a>
          </li>
      </>
  )

  if (currentUser) {
      loginActions = (
          <li style={{ float: 'right' }}>
              Logged in as {currentUser.firstname} {currentUser.lastname}
          </li>
      )
  }

//   let addPlaceButton = null

//   if (currentUser?.role === 'admin') {
//       addPlaceButton = (
//           <li>
//               <a href="#" onClick={() => navigate.push("/places/new")}>
//                   Add Place
//               </a>
//           </li>
//       )
//   }

  return (
    <div className='navbar'>
      <nav>
          <ul>
              <li>
                  <a href="#" onClick={() => navigate("/")}>
                      Home
                  </a>
              </li>
              {/* <li>
                  <a href="#" onClick={() => navigate("/profile")}>
                      Profile UNACTIVE
                  </a>
              </li> */}
              <li>
                  <a href="#" onClick={() => navigate("/feed")}>
                      Feed
                  </a>
              </li>
              {/* {addPlaceButton} */}
              {loginActions}
          </ul>
      </nav>
    </div>
  )
}



export default Navbar;