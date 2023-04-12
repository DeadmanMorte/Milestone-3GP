import CurrentUserProvider from './contexts/CurrentUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './users/LoginForm';
import SignUpForm from './users/SignUpForm';
import Home from './Home';
import Feed from './publishes/Feed'
import './App.css';

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
            <div className="App">
              <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/feed" element= {<Feed/>}/>
                <Route exact path="/signup" element={<SignUpForm/>} />
                <Route exact path="/login" element={<LoginForm/>} />

              </Routes>
            </div>
      </BrowserRouter>
      </CurrentUserProvider>
  );
}

export default App;
