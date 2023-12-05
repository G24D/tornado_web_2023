import React, { useEffect, useState } from 'react';

const Ex02 = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function fetchPosts() {
            try {
                const userResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
                const posts = await userResponse.json();
                setPosts(posts);
                setLoading(false);
            } catch (err) {
                console.error('ERROR', err);
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    const filteredPosts = posts.filter(
        (post) => post.title.includes(searchTerm) || post.body.includes(searchTerm)
    );

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search posts..."
            />
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    {filteredPosts.map((post) => (
                        <p key={post.id}>{post.title}</p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Ex02;
