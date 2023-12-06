import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostDetails = () => {

    const { postId } = useParams();
    const [ post, setPost ] = useState(null);

    useEffect(()=> {
        const fetchData = async () =>  {
            try {
                const resp = await fetch(`https://jsonplaceholder.typicoder.com/posts/${postId}`);
                const data = await resp.json();
                setPost(data);
            } catch (err) {
                console.error('This is fetching error ', err);
            } finally {
                console.log('kekw');
            }
        } 
        fetchData();
    }, [postId])

  return (
    <div>
        <h1>{data.title}</h1>
        <h1>{data.body}</h1>
    </div>
  )
}

export default PostDetails