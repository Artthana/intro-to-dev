function appendImage(keyword, index) {
    const imageE = document.createElement('img');
    imageE.src = `https://source.unsplash.com/400x255?${keyword}&sig=${index}`;

    const galleryElem = document.querySelector('.gallery');
    galleryElem.appendChild(imageE);
}

function run() {
    for (let i = 1; i < 9; i++){
        appendImage('car',i)
    }
}

run();