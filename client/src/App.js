import CurrentUserProvider from './contexts/CurrentUser';
import { BrowserRouter, Route } from 'react-router-dom'
import LoginForm from './users/LoginForm';
import SignUpForm from './users/SignUpForm';
import './App.css';

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={SignUpForm} />
          <Route exact path="/login" component={LoginForm} />
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Pre APP</h1>
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
              </header>
            </div>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
