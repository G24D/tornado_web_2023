
const pinnedContainer = document.querySelector('.pinned-posts');
const pinnedPosts = [
    {
        title: 'Welcome to Web Development',
        postedBy: 'Tilo Mitra',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, iste magnam consectetur quo minima necessitatibus voluptas, consequatur facilis asperiores aperiam, magni repudiandae blanditiis commodi modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, iste magnam consectetur quo minima necessitatibus voluptas, consequatur facilis asperiores aperiam, magni repudiandae blanditiis commodi modi.',
    }
];

const postMethods = () => {
    function addPostToPinned(title, postedBy, info) {
        const newPost = {
            title,
            postedBy,
            info
        };
        pinnedPosts.push(newPost);
        displayPinnedPosts();
    }

    function displayPinnedPosts() {
        pinnedContainer.innerHTML = '';
        pinnedPosts.forEach((pinnedPost) => {
            const postEl = document.createElement('div');
            postEl.classList.add('posts');
            postEl.innerHTML =
                `<h1>${pinnedPost.title}</h1>
                <i>By <a href="#">${pinnedPost.postedBy}</a>
                <button class="btn1">css</button> 
                <button class="btn2">html</button> 
                </i>
                <img src="./img/pic-1.jpg" alt="" width="60px">
                <div style="margin-top: 20px;">${pinnedPost.info}</div>`;
            pinnedContainer.appendChild(postEl);
        });
    }

    const btn = document.getElementById('btn4blog');
    const enteredName = document.getElementById('fname');
    const enteredBlog = document.getElementById('bloginfo');
    const enteredTitle = document.getElementById('title');

    function addBlogs(e) {
        if (enteredName.value === '' || enteredBlog.value === '' || enteredTitle === '') {
            alert('WRITE SOMETHING!!!');
        } else {
            addPostToPinned( enteredTitle.value, enteredName.value, enteredBlog.value);
            enteredName.value = '';
            enteredBlog.value = '';
            enteredTitle.value = '';
        }
        e.preventDefault();
    }

    btn.addEventListener("click", addBlogs);
    displayPinnedPosts();
}

postMethods();