

import SignUpForm from '../users/SignUpForm';
import LoginForm from '../users/LoginForm';
import Feed from './Feed';
import React from 'react';
import Navbar from '../components/Navbar';
import AddPublish from '../publishes/addPublish';
import EditPublish from '../publishes/editPublish';
import AddComment from '../publishes/addComment';

function Home() {
    return (
        <div>
            <LoginForm />
            <SignUpForm />

        </div>
    )
}

export default Home;;
