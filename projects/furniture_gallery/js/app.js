const images = document.querySelectorAll('.zoomed-img');

images.forEach((image) => {
    image.addEventListener('click', () => {
       

        images.forEach((img) => {
            img.classList.remove('zoomed');
            if (img !== image) {
                img.classList.add('blurred');
            } 
        });
        image.classList.add('zoomed');
    });

});
