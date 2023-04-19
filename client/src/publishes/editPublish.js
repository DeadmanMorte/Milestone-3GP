// import React, { useState } from 'react';
// import { useNavigate, useNavigation, useParams } from 'react-router-dom';

// function editPublish() {

//     const navigate = useNavigate();

//     const { publish_id } = useParams();

//     const [publish, setPublish] = useState({
//         caption: '',
//         pic: '',
//     })






//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch(`http://localhost:4000/publishes/${publish_id}`)
//             const resData = await response.json()
//             setPublish(resData)
//         }
//         fetchData()
//     }, [publish_id])


//     async function handleSubmit(e) {
//         e.preventDefault()

//         await fetch(`http://localhost:4000/publishes/`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(publish)

//         })
//         navigate('/feed')
//     }

//     return (
//         <main>
//             <h1>Edit Publication</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmFor='caption'> Caption</label>
//                     <input
//                         required
//                         value={publish.caption}
//                         onChange={e => setPublish({ ...publish, caption: e.target.value })}
//                         className='form-control'
//                         id='caption'
//                         name='caption'
//                     />
//                 </div>
//                 <div>
//                     <label htmFor='pic'> Pic</label>
//                     <input
//                         required
//                         value={publish.pic}
//                         onChange={e => setPublish({ ...publish, pic: e.target.value })}
//                         className='form-control'
//                         id='pic'
//                         name='pic'
//                     />
//                 </div>
//                 <input className='btn btn-primary' type='submit' value='New Publish' />
//             </form >
//         </main >
//     );
// };

// export default editPublish