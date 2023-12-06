import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Comments from './Comments'

const Ex05 = () => {

    const [posts, setPosts] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(null)
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        async function fetchPosts() {
            try {
                const userResp = await axios.get('https://jsonplaceholder.typicode.com/posts');
                const jsonData = await userResp.data;
                setPosts(jsonData);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        }
    
        fetchPosts();
    }, []);

    return (
        <div>
            <div id="posts">POSTS</div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div id="posts">POSTS</div>
                    {posts.map(post => (
                        <p key={post.id} onClick={() => setSelectedPostId(post.id)}>
                            {post.title}
                        </p>
                    ))}
                    {selectedPostId && <Comments postId={selectedPostId} />}
                    <div id='comments'></div>
                </>
            )}
            {selectedPostId && <Comments postId={selectedPostId} />}
            <div id='comments'></div>
        </div>
    )
}

export default Ex05
