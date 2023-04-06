import CurrentUserProvider from './contexts/CurrentUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './users/LoginForm';
import SignUpForm from './users/SignUpForm';
import Home from './users/Home';
import './App.css';

function App() {
  return (
      <BrowserRouter>
            <div className="App">
              <Routes>
                <Route exact path="/" element= {<Feed/>}/>
                <Route exact path="/sign-up" element={<SignUpForm/>} />
                <Route exact path="/home" element={<Home/>} />
                <Route exact path="/login" element={<LoginForm/>} />

              </Routes>
            </div>
      </BrowserRouter>
  );
}

export default App;
