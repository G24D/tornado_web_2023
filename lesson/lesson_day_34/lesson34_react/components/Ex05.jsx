import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Comments from './Comments'

const Ex05 = ({posts, setSelectedPostId}) => {
    
    const [posts, setPosts] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(null)


    useEffect(()=> {
        async function fetchPosts() {
            try {
                const userResp = await axios.get('https://jsonplaceholder.typicode.com/posts');
                const jsonData = await userResp.data;
                setPosts(jsonData);
            }
            catch(err){
                console.error(err)    
            } finally {
                console.log('dsad');
            }
        }
        fetchPosts();
    }, [])

  return (
    <div>
        <div id="posts">POSTS</div>
        {posts.map(post => (
            <p key={post.id} onClick={() => setSelectedPostId(post.id)}>
                {post.title}
            </p>
        ))}
        {selectedPostId && <Comments postId={selectedPostId} />}
        <div id='comments'></div>
    </div>
  )
}

export default Ex05
