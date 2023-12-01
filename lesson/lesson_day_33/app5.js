async function fetchPosts() {
    try {
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await userResponse.json();
        const slicedData = posts.slice(0, 30);

        document.getElementById('filteredList').innerHTML = slicedData.map((post) => `<p>${post.title}</p>`).join('');

        const filteredList = document.getElementById('filteredList');

        filteredList.querySelectorAll('p').forEach((postElement, index) => {
            postElement.addEventListener('click', () => {
                handleClick(index, slicedData);
                
            });
        });

    } catch (err) {
        console.error('ERROR', err);
    }
}


const handleClick = (index, slicedData) => {
    document.getElementById('comments').innerHTML = slicedData.map((post, postIndex) => {
        return postIndex === index ? `<p>${post.body}</p>` : null;
    }).join('');
};



fetchPosts();
