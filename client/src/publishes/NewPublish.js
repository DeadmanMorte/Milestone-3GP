import React, { useState, useEffect } from 'react';

//look at individual publish
function Publish({ publishId }) {
    const [publish, setPublish] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the publish data from the backend
        fetch(`/api/publishs/${publishId}`)
            .then(response => response.json())
            .then(data => setPublish(data))
            .catch(error => setError(error));
    }, [publishId]);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!publish) {
        return <div>Loading...</div>;
    } else {
        return (
            <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', width: '300px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={publish.user.avatarUrl} alt="User avatar" style={{ borderRadius: '50%', marginRight: '10px' }} />
                    <h2>{publish.user.username}</h2>
                </div>
                <img src={publish.imageUrl} alt="publish image" style={{ maxWidth: '100%', marginTop: '10px' }} />
                <p>{publish.caption}</p>
                <p>{publish.likes} likes</p>
            </div>
        );
    }
}

export default Publish;
