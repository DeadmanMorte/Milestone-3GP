import { useContext } from "react";
import { CurrentUser } from '../contexts/CurrentUser'

function ShowComment({ comment, onDelete }) {
    const { currentUser } = useContext(CurrentUser)

    let deleteButton = null;

    if (currentUser?.user_id === comment.author_id) {
        deleteButton = (
            <button className="btn btn-danger" onClick={onDelete} >
                Delete Comment
            </button>
        )
    }
    return (
        <div className="border col-sm-4">
            
            <h4>{comment.content}</h4>
            <h3>
                <strong>- {comment.author} </strong>
            </h3>
            
            {deleteButton}
        </div>
    )
}

export default ShowComment;