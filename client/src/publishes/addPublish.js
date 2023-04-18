import React, { useState } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom'

function addPublish() {	

	const [publish, setPublish] = useState({
		username: '',
		pic: '',
		caption: '',
	})



	const navigate = useNavigate();
	
	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:4000/publishes`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(publish)
		})

		navigate('/feed')
	}

	return (
		<main>
			<h1>Add a New Post</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Username</label>
					<input
						required
                        
						value={publish.username}
						onChange={e => setPublish({ ...publish, username: e.target.value })}
						className="form-control"
						id="name"
						name="name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="picture">place a picture</label>
					<input
						required
						value={publish.pic}
						onChange={e => setPublish({ ...publish, pic: e.target.value })}
						className="form-control"
						id="pic"
						name="pic"
					/>
				</div>
				
				<div className="form-group">
					<label htmlFor="city">add a caption</label>
					<input
						value={publish.caption}
						onChange={e => setPublish({ ...publish, caption: e.target.value })}
						className="form-control"
						id="caption"
						name="caption"
					/>
				</div>
				
				<input className="btn btn-primary" type="submit" value="Add a post" />
			</form>
		</main>
	)
}

export default addPublish