
import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router"
import { CurrentUser } from "../contexts/CurrentUser";
import AddComment from "./addComment";
import ShowComment from './ShowComment';


function ViewPublish() {

	const { publish_id } = useParams()

	const navigate = useNavigate()

	const { currentUser } = useContext(CurrentUser)

	const [publishes, setPublishes] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:4000/publishes/${publish_id}`)
			const resData = await response.json()
			setPublishes(resData)
		}
		fetchData()
	}, [publish_id])

	if (publishes === null) {
		return <h1>Loading</h1>
	}

	function editPublish() {
		navigate(`/publishes/${publishes.publish_id}/edit`)
	}

	async function deletePublish() {
		await fetch(`http://localhost:4000/publishes/${publishes.publish_id}`, {
			method: 'DELETE'
		})
		navigate('/feed')
	}

	async function deleteComment(deletedComment) {
		await fetch(`http://localhost:4000/publishes/${publishes.publish_id}/comments/${deletedComment.comment_id}`, {
			method: 'DELETE'
		})

		setPublishes({
			...publishes,
			comments: publishes.comments
				.filter(comment => comment.comment_id !== deletedComment.comment_id)
		})
	}

	async function createComment(commentAttributes) {
		const response = await fetch(`http://localhost:4000/publishes/${publishes.publish_id}/comments`, {
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

	if (publishes.comments.length) {
		comments = publishes.comments.map(comment => {
			return (
				<ShowComment key={comment.comment_id} comment={comment} onDelete={() => deleteComment(comment)} />
			)
		})
	}
	
	
		
	let PublishActions = null

	if (currentUser) {
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
					{publishes.caption} 
					</h2>
					
				
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
		
	}




export default ViewPublish