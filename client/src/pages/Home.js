import React, { useContext, useEffect } from 'react';
import SignUpForm from '../users/SignUpForm';
import LoginForm from '../users/LoginForm';
import Feed from './Feed';
import Navbar from '../components/Navbar';
import AddPublish from '../publishes/addPublish';
import EditPublish from '../publishes/editPublish';
import AddComment from '../publishes/addComment';
import { useNavigate } from 'react-router-dom'
import { CurrentUser } from '../contexts/CurrentUser';



function Home() {
    const { currentUser } = useContext(CurrentUser);

    return (
        <div>
           {currentUser ? <Feed /> : <LoginForm/ > }
        </div>
    )
}
{/* <LoginForm />
<SignUpForm /> */}

export default Home;;
