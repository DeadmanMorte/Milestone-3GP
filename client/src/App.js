import CurrentUserProvider from './contexts/CurrentUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './users/LoginForm';
import SignUpForm from './users/SignUpForm';
import Home from './pages/Home';
import Feed from './pages/Feed';
import AddPublish from './publishes/addPublish';
import EditPublish from './publishes/editPublish';
import AddComment from './publishes/addComment';
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
                <Route exact path='/publishes:publish_id/edit' element={<EditPublish/>} />
                <Route exact path='/publishes/new' element={<AddPublish/>}/>
                <Route exact path='/publishes/comment' element={<AddComment/>}/>
                
              </Routes>
            </div>
      </BrowserRouter>
      </CurrentUserProvider>
  );
}

export default App;