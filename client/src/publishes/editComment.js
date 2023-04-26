import { readFileSync } from "fs";
import { useState, useEffect } from "react";


function editComment() {
    const { setCurrentUser } = useContext(CurrentUser)

    const [comment, setComment] = useState({
        content: '',
        like: false
    })
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4000/publishes${publish_id}`)
            const resData = await response.json()
            setComment(resData)
        }
        fetchData()
    }, [publish_id])
    async function handleSubmit(e){
        e.preventDefault()

        await fetch(`http://localhost:4000/publishes${publish.publish_id}`,{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(publish)
        })
        // history.push(`/publishes/${publish.publish_id}`)
    }
    return(
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
        <input className="btn btn-primary" type="submit" value="Change Comment" />
    </form>
    )
}