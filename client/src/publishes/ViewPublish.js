
import React, { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router';
import editPublish from 'editPublish';
//look at individual publish
function Publish({ publish_id }) {
    const [publish, setPublishes] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPublishes = async () => {
          const response = await fetch(`http://localhost:4000/publishes/`)
          const resData = await response.json()
          setPublishes(resData)
        }
        fetchPublishes();
      }, []);



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