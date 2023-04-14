import React from 'react';
import Home from './Home';
import Feed from './Feed';
import SignUpForm from '../users/SignUpForm';
import LoginForm from '../users/LoginForm';
import {Route, Routes} from 'react-router-dom';

function Pages() {
  return (
    
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/feed" element={<Feed/>} />
        <Route exact path="/sign-up" element={<SignUpForm/>} />
        <Route exact path="/login" element={<LoginForm/>} />
    </Routes>
  )
}

export default Pages;