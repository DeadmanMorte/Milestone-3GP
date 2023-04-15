import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { CurrentUser } from "../contexts/CurrentUser";

// import Form from './Form.css'

function SignUpForm() {

	const { setCurrentUser } = useContext(CurrentUser)
	const navigate = useNavigate();
	
	const [user, setUser] = useState({
		firstname: '',
		lastname: '',
		username: '',
		email: '',
		password: ''
	})

	
	// New profile POST fetch request/db update. 
	async function handleSubmit(e) {
		e.preventDefault()

		 await fetch(`http://localhost:4000/users/`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		setCurrentUser(user)
		navigate('/feed')
	};

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