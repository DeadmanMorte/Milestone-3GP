import { useContext, useState } from "react";
import { CurrentUser } from "../contexts/CurrentUser";
import SignUpForm from "./SignUpForm";

function LoginForm() {


    const { setCurrentUser } = useContext(CurrentUser)

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })
    
    // Barrier check if logged in
    if (CurrentUser  != null){
        return <Feed />
    }

    const [errorMessage, setErrorMessage] = useState(null)

      
async function handleSubmit(e) {
    e.preventDefault()
    const response = await fetch(`http://localhost:${process.env.PORT}/authentication/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })

    const data = await response.json()

if (response.status === 200) {
    setCurrentUser(data.user)
    CurrentUser.push('/')
} else {
    setErrorMessage(data.message)
 }}

    return (
        <main>
            <h1>Login</h1>
            {errorMessage !== null
                ? (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )
                : null
            }
            <form onSubmit={handleSubmit}>

            <div className="row">
                <h1>Welcome!</h1>
            </div>
                <div className="row">
                    <div className="col-sm-6 form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            required
                            value={credentials.email}
                            onChange={e => setCredentials({ ...credentials, email: e.target.value })}
                            className="form-control"
                            id="email"
                            name="email"
                        />
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            required
                            value={credentials.password}
                            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                            className="form-control"
                            id="password"
                            name="password"
                        />
                    </div>
                </div>
                <div className="row">
					<a href="/signup">First Time? Sign Up</a> 
				</div>
                <input className="btn btn-primary" type="submit" value="Login" />
            </form>
        </main>
    )
}

export default LoginForm