import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate()

  const { currentUser } = useContext(CurrentUser)

  let loginActions = (
      <>
          <li style={{ float: 'right' }}>
              <a href="#" onClick={() => navigate.push("/sign-up")}>
                  Sign Up
              </a>
          </li>
          <li style={{ float: 'right' }}>
              <a href="#" onClick={() => navigate.push("/login")}>
                  Login
              </a>
          </li>
      </>
  )

  if (currentUser) {
      loginActions = (
          <li style={{ float: 'right' }}>
              Logged in as {currentUser.firstName} {currentUser.lastName}
          </li>
      )
  }

  let addPlaceButton = null

  if (currentUser?.role === 'admin') {
      addPlaceButton = (
          <li>
              <a href="#" onClick={() => navigate.push("/places/new")}>
                  Add Place
              </a>
          </li>
      )
  }

  return (
      <nav>
          <ul>
              <li>
                  <a href="#" onClick={() => navigate.push("/")}>
                      Home
                  </a>
              </li>
              <li>
                  <a href="#" onClick={() => navigate.push("/places")}>
                      Places
                  </a>
              </li>
              {addPlaceButton}
              {loginActions}
          </ul>
      </nav>
  )
}



export default Navbar;