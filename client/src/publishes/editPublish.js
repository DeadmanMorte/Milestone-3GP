import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useNavigation, useParams } from 'react-router-dom';

function EditPublish() {

    const navigate = useNavigate();

    const { publish_id } = useParams();

    const [publish, setPublish] = useState({
        caption: '',
        pic: '',
    })

    

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4000/publishes/${publish_id}`)
            const resData = await response.json()
            setPublish(resData)
        }
        fetchData()
    }, [publish_id])


    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`http://localhost:4000/publishes/${publish.publish_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(publish)

        })
        navigate(`/publishes/${publish.publish_id}`)
    }

    return (
        <main>
            <h1>Edit Publication</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='caption'> Caption</label>
                    <input
                        
                        value={publish.caption}
                        onChange={e => setPublish({ ...publish, caption: e.target.value })}
                        className='form-control'
                        id='caption'
                        name='caption'
                    />
                </div>
                {/* <div>
                    <label htmlFor='pic'> Pic</label>
                    <input
                        defaultValue='../public/golden_retiver_cat_cropped.jpg.'
                        type='file'
                        value={publish.pic}
                        onChange={e => setPublish({ ...publish, pic: e.target.value })}
                        className='form-control'
                        id='pic'
                        name='pic'
                    />
                </div> */}
                <input className='btn btn-primary' type='submit' value='Edit Publish' />
            </form >
        </main >
    );
};

export default EditPublish