import { useState, useEffect } from "react"
import { useParams } from "react-router"

function SignUpForm() {

	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		username: '',
		password: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:${process.env.PORT}/users/`, {
			method: 'POST',
			credentials:'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})

		user.push(`/`)
	}

	return (
		<main>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="firstName">First Name</label>
						<input
							required
							value={user.firstName}
							onChange={e => setUser({ ...user, firstName: e.target.value })}
							className="form-control"
							id="firstName"
							name="firstName"
						/>
					</div>
					<div className="col-sm-6 form-group">
						<label htmlFor="lastName">Last Name</label>
						<input
							required
							value={user.lastName}
							onChange={e => setUser({ ...user, lastName: e.target.value })}
							className="form-control"
							id="lastName"
							name="lastName"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="username">Username</label>
						<input
							type="username"
							required
							value={user.username}
							onChange={e => setUser({ ...user, username: e.target.value })}
							className="form-control"
							id="username"
							name="username"
						/>
					</div>
					<div className="col-sm-6 form-group">
						<label htmlFor="password">Password</label>
						<input type="password" 
						required 
						value={user.password} 
						onChange={e => setUser({...user, password: e.target.value})}
						className="form-control"
						id="password"
						name="password"
						/>
					</div>
				</div>
				<input className="btn btn-primary" type="submit" value="Sign Up" />
			</form>
		</main>
	)
}

export default SignUpForm