

import SignUpForm from '../users/SignUpForm';
import LoginForm from '../users/LoginForm';
import Feed from './Feed';
import React from 'react';


function Home() {
    return (
        <div>
            <LoginForm />
            <SignUpForm />
            <Feed />
        </div>
    )
}

export default Home;;