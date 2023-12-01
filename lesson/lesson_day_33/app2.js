async function getUserAndPosts() {
    try {
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await userResponse.json();
        console.log(data);        
        const slicedData = data.slice(0, 3);
        slicedData.map( x=> {
            const div = document.getElementById('exone');
            const liEl = document.createElement('li');
            liEl.textContent = `${x.name}`;
            div.appendChild(liEl);
        })
    } catch (err) {
    console.error(err);
}
}


getUserAndPosts();
