
import React, { useEffect, useState } from 'react';

const Ex01 = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const userResponse = await fetch('https://jsonplaceholder.typicode.com/posts/2');
                const post = await userResponse.json();
                setPosts([post]); 
                setLoading(false); 
            } catch (err) {
                console.error('ERROR', err);
                setLoading(false); 
            }
        }
        fetchPosts()
        
    }, []);


    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {posts.map((post) => (
                        <div key={post.id}>
                            <li>{post.title}</li>
                            <li>{post.body}</li>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Ex01;
