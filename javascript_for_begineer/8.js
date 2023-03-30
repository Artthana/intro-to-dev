function appendImage(keyword, index) {
    const imageE = document.createElement('img');
    imageE.src = `https://source.unsplash.com/400x255?${keyword}&sig=${index}`;

    const galleryElem = document.querySelector('.gallery');
    galleryElem.appendChild(imageE);
}

function removePhotos(){
    const galleryElem = document.querySelector('.gallery');
    galleryElem.innerHTML = '';
}

function searchPhotos(event) {
    const keyword = event.target.value;

    if (event.key === 'Enter' && keyword) {
        removePhotos();
        for (let i = 1; i < 9; i++) {
            appendImage(keyword, i)
        }
    }
}

function run() {
    const inputElem = document.querySelector('input');
    inputElem.addEventListener('keydown', searchPhotos)
}

run();