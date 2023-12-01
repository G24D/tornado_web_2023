

async function getUserAndPosts() {
    try {
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/posts/2')
        const userJson = await userResponse.json();
        const data = userJson;
        console.log(data);
        const displayEx1 =()=> {
            const div = document.getElementById('exone');
            const liId = document.createElement('li');
            const liTitle = document.createElement('li');
            const liBody = document.createElement('li');
            liId.textContent = `${data.id}`;
            liTitle.textContent = `${data.title}`;
            liBody.textContent = `${data.body}`;

            div.appendChild(liId);
            div.appendChild(liTitle);
            div.appendChild(liBody);
        }
        
        displayEx1();
    } catch (err) {
        console.error('ERRROR');
    }
}

getUserAndPosts();

