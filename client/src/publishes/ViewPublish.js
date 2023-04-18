import React, { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router';
import editPublish from 'editPublish';
//look at individual publish
function Publish({ publish_id }) {
    const [publish, setPublish] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the publish data from the backend
        fetch(`/server/publishes/${publish_id}`)
            .then(response => response.json())
            .then(data => setPublish(data))
            .catch(error => setError(error));
    }, [publish_id]);



    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!publish) {
        return <div>Loading...</div>;
    } else {
        return (
            <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', width: '300px' }}>
                <a className='btn btn-warning' onClick={editPublish}>Edit</a>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                   
                    <h2>{publish.user.username}</h2>
                </div>
                <img src={publish.pic} alt="publish image" style={{ maxWidth: '100%', marginTop: '10px' }} />
                <p>{publish.caption}</p>
                <p>{publish.likes} likes</p>
            </div>
        );
    }
}

export default Publish;
