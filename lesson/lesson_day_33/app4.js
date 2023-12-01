const posts = document.getElementById('posts');
let page = 1;

async function fetchPosts(p) {
    try {
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${p}`);
        const posts = await userResponse.json();
        const slicedData = posts.slice(0, p*10);
        console.log(slicedData);
        document.getElementById('posts').innerHTML = slicedData.map(d => `<p>${d.title}</p>`).join('');

    } catch (err) {
        console.error('ERRROR');
    }
}

fetchPosts(1)

document.getElementById('prev').addEventListener('click', ()=> {

    if ( page > 0 ) {
        page = page -1 ;
        fetchPosts(page);
    } else {
        page = 11;
        page = page - 1;
        fetchPosts(page);
    }
});


 document.getElementById('next').addEventListener('click', ()=> {
    if (page < 10) {
        page = page + 1;
        fetchPosts(page);
    } else {
        page = 0; 
        page = page + 1;
        fetchPosts(page)
    }
});

