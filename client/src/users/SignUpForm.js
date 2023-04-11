import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import { CurrentUser } from "../contexts/CurrentUser";
import Feed from './Feed'
// import Form from './Form.css'

function SignUpForm() {

	const { setCurrentUser } = useContext(CurrentUser)

	const [user, setUser] = useState({
		firstname: '',
		lastname: '',
		username: '',
		email: '',
		password: ''
	})

	// Barrier check if logged in
<<<<<<< HEAD
	if (CurrentUser  != null){
        window.location.href = '/'
    }
	// New profile POST fetch request/db update. 
=======
	// if (CurrentUser  != null){
	//     return <Feed />
	// }

>>>>>>> 971768d7dbfbe9109aa5769269fee06b0961036b
	async function handleSubmit(e) {
		e.preventDefault()

		const response = await fetch(`http://localhost:5000/users/`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		if (response.status === 200) {
			setCurrentUser(user)
			window.location.href = '/'
		} else {
			console.log('Sign Up fetch error')
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="firstName">First Name:</label>
				<input
					required
					value={user.firstname}
					onChange={e => setUser({ ...user, firstname: e.target.value })}
					className="form-control"
					id="firstname"
					name="firstname"
				/>
			</div>
			<div>
				<label htmlFor="lastName">Last Name:</label>
				<input
					required
					value={user.lastname}
					onChange={e => setUser({ ...user, lastname: e.target.value })}
					className="form-control"
					id="lastname"
					name="lastname"
				/>
			</div>
			<div>
				<label htmlFor="username">Username:</label>
				<input
					required
					value={user.username}
					onChange={e => setUser({ ...user, username: e.target.value })}
					className="form-control"
					id="username"
					name="username"
				/>
			</div>
			<div>
				<label htmlFor="email">Email:</label>
				<input
					required
					value={user.email}
					onChange={e => setUser({ ...user, email: e.target.value })}
					className="form-control"
					id="email"
					name="email"
				/>
			</div>
			<div>
				<label htmlFor="password">Password:</label>
				<input
					type="password"
					required
					value={user.password}
					onChange={e => setUser({ ...user, password: e.target.value })}
					className="form-control"
					id="password"
					name="password"
				/>
			</div>
			<input className="btn btn-primary" type="submit" value="Sign Up" />
		</form>
	);
}



export default SignUpForm