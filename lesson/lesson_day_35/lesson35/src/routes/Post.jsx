import React, { useEffect, useState } from 'react';

const Post = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(err => console.error('Error fetching posts: ', err));
    }, []);

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                posts.map(post => (
                    <div key={post.id}>
                        <h1 className='text-3xl font-bold'>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))
            )}
        </>
    );
};

export default Post;
