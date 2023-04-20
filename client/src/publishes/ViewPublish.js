
import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router"
import { CurrentUser } from "../contexts/CurrentUser";
import AddComment from "./addComment";


function ViewPublish() {

	const { publish_id } = useParams()

	const navigate = useNavigate()

	const { currentUser } = useContext(CurrentUser)

	const [publishes, setPublishes] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5000/Publishs/${publish_id}`)
			const resData = await response.json()
			setPublishes(resData)
		}
		fetchData()
	}, [publish_id])

	if (publishes === null) {
		return <h1>Loading</h1>
	}

	function editPublish() {
		navigate(`/Publishs/${publishes.publish_id}/edit`)
	}

	async function deletePublish() {
		await fetch(`http://localhost:5000/Publishs/${publishes.publish_id}`, {
			method: 'DELETE'
		})
		navigate('/Publishes')
	}

	async function deleteComment(deletedComment) {
		await fetch(`http://localhost:5000/Publishs/${publishes.PublishId}/comments/${deletedComment.commentId}`, {
			method: 'DELETE'
		})

		setPublishes({
			...publishes,
			comments: publishes.comments
				.filter(comment => comment.commentId !== deletedComment.commentId)
		})
	}

	async function createComment(commentAttributes) {
		const response = await fetch(`http://localhost:5000/Publishs/${publishes.PublishId}/comments`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(commentAttributes)
		})

		const comment = await response.json()

		setPublishes({
			...publishes,
			comments: [
				...publishes.comments,
				comment
			]
		})

	}



	let comments = (
		<h3 className="inactive">
			No comments yet!
		</h3>
	)
	
	
		
		
	}


	let PublishActions = null

	if (CurrentUser) {
		PublishActions = (
			<>
				<a className="btn btn-warning" onClick={editPublish}>
					Edit
				</a>{` `}
				<button type="submit" className="btn btn-danger" onClick={deletePublish}>
					Delete
				</button>
			</>
		)
	}

	return (
		<main>
			<div className="row">
				<div className="col-sm-6">
					<img style={{ maxWidth: 200 }} src={publishes.pic} />
					<h3>
						
					</h3>
				</div>
				<div className="col-sm-6">
					<h1>{publishes.username}</h1>
					
					
					<br />
					<h2>
						Description
					</h2>
					<h3>
						{publishes.username} 
					</h3>
					
					<br />
					{PublishActions}
				</div>
			</div>
			<hr />
			<h2>Comments</h2>
			<div className="row">
				{comments}
			</div>
			<hr />
			<h2>Add comment</h2>
			<AddComment
				Publish={publishes}
				onSubmit={createComment}
			/>
		</main>
	)


export default ViewPublish