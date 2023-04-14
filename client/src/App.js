import CurrentUserProvider from './contexts/CurrentUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './users/LoginForm';
import SignUpForm from './users/SignUpForm';
import Home from './users/Home';
import Feed from './publishes/Feed';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
            <div className="App">
              <Navbar />
              <div className='content'>
                <Routes>
                  <Route exact path="/signup" element={<SignUpForm/>} />
                  <Route exact path="/" element= {<Home/>}/>
                  <Route exact path="/feed" element={<Feed/>} />
                  <Route exact path="/login" element={<LoginForm/>} />
                </Routes>
              </div>
            </div>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
