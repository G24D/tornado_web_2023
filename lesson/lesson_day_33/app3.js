const input = document.getElementById('input');
const filteredList = document.getElementById('filteredList');

input.addEventListener('input', async (e) => {
    try {
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await userResponse.json();
        console.log(data);

        filteredList.innerHTML = '';

        data.filter(item => {
            if (item.title.includes(e.target.value)) {
                const liEl = document.createElement('li');
                liEl.textContent = item.title;
                filteredList.appendChild(liEl);
            }
        });

    } catch (err) {
        console.error(err);
    }
});
