import CurrentUserProvider from './contexts/CurrentUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './users/LoginForm';
import SignUpForm from './users/SignUpForm';
import Home from './users/Home';
import Feed from './users/Feed'
import './App.css';

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
            <div className="App">
              <Routes>
<<<<<<< HEAD
                <Route exact path="/" element= {<Feed/>}/>
                <Route exact path="/signup" element={<SignUpForm/>} />
                <Route exact path="/home" element={<Home/>} />
=======
                <Route exact path="/" element= {<Home/>}/>
                <Route exact path="/sign-up" element={<SignUpForm/>} />
                <Route exact path="/feed" element={<Feed/>} />
>>>>>>> 971768d7dbfbe9109aa5769269fee06b0961036b
                <Route exact path="/login" element={<LoginForm/>} />

              </Routes>
            </div>
      </BrowserRouter>
      </CurrentUserProvider>
  );
}

export default App;
