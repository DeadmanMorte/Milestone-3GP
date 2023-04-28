//submit a new comment 
import { useContext, useState, useEffect } from "react"
import { CurrentUser } from "../contexts/CurrentUser"
import { useNavigate } from "react-router"

function AddComment({ publish, onSubmit }) {


    const [comment, setComment] = useState({
        content: '',
        like: false
    })
    const { setCurrentUser } = useContext(CurrentUser)

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/users`)
            const users = await response.json()
            setComment({ ...comment, authorId: users[0]?.user_id })

        }
        fetchData()
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(comment)
        setComment({
            content: '',
            like: false

        })
    }

    if (!CurrentUser) {
        return <p>You must be logged in to comment on a post</p>
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-group col-sm-12">
                    <label htmlFor="content">Content</label>
                    <textarea
                        required
                        value={comment.content}
                        onChange={e => setComment({ ...comment, content: e.target.value })}
                        className="form-control"
                        id="content"
                        name="content"
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-sm-4">
                    <label htmlFor="like">Like</label>
                    <input
                        value={comment.like}
                        onChange={e => setComment({ ...comment, like: e.target.value })}
                        type="checkbox"
                        id='like'
                    />
                </div>
            </div>
            <input className="btn btn-primary" type="submit" value="Add Comment" />
        </form>
    )
}

export default AddComment