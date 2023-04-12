import { useContext, useState } from "react";
import { CurrentUser } from "../contexts/CurrentUser";
import './Form.css'
function LoginForm() {


    const { setCurrentUser } = useContext(CurrentUser)

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })
    
    // Barrier check if logged in
    if (CurrentUser  != null){
        window.location.href = '/'
    }


 // POST login request to db. 
async function handleSubmit(e) {
    e.preventDefault()
    const response = await fetch(`http://localhost:5000/authentication/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })

    const data = await response.json()

if (response.status === 200) {
    setCurrentUser(data.user)
    window.location.href= '/'
} else {
    console.log('Log in fetch error')
}}

    return (
        <main>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>

            <div className="row">
                <h1>Welcome!</h1>
            </div>
                <div className="row">
                    <div className="col-sm-6 form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="username"
                            required
                            value={credentials.username}
                            onChange={e => setCredentials({ ...credentials, username: e.target.value })}
                            className="form-control"
                            id="username"
                            name="username"
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

export default LoginForm;