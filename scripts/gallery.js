const images = document.querySelectorAll('section.gallery-content img');
const navigationBar = document.querySelector('nav.mobile');
const imageResize = document.querySelector('div.image-resize');
const mobileWrapper = document.querySelector('div.mobile-wrapper');
const exitBtn = document.querySelector('div.area');
const prevBtn = document.querySelector('button.previous');
const nextBtn = document.querySelector('button.next');
const currentImageCounter = document.querySelector('div.current-image');
const allImagesCounter = document.querySelector('div.all-images');

// -- GALLERY IMAGE FEATURES -- 

// Contains current opened image index
let currentImageIndex;

// Images Counter

// Current image counter
function changeCurrentImgCounter() {
    currentImageCounter.textContent = currentImageIndex + 1;
}

// Total images counter 

// Get list (array) of images

const imageArray = function getImageList() {
    let imagesList = [];

    images.forEach(image => {
        imagesList.push(image);
    })

    allImagesCounter.textContent = imagesList.length;
    return imagesList;
}

// Get image index

function getImageIndex(currentImage) {

    let currentImageIndex;

    for (index in imageArray()) {

        if (currentImage == imageArray()[index])
            currentImageIndex = index;
    }

    return currentImageIndex;
}

// Get next image

function getNextImage() {

    if (currentImageIndex == imageArray().length - 1) {
        currentImageIndex = 0;
    } else {
        currentImageIndex++;
    }

    const nextImgSrc = imageArray()[currentImageIndex].getAttribute('src');
    imageResize.querySelector('img').setAttribute('src', nextImgSrc);
    changeCurrentImgCounter();
}

// Get previous image

function getPreviousImage() {

    if (currentImageIndex == 0) {
        currentImageIndex = imageArray().length - 1;
    } else {
        currentImageIndex--;
    }

    const nextImgSrc = imageArray()[currentImageIndex].getAttribute('src');
    imageResize.querySelector('img').setAttribute('src', nextImgSrc);
    changeCurrentImgCounter();
}

// Listeners for next and previous buttons

prevBtn.addEventListener('click', () => getPreviousImage());
nextBtn.addEventListener('click', () => getNextImage());

document.addEventListener('keydown', function (e) {

    if (imageResize.style.display == 'block' && e.key == 'ArrowLeft')
        getPreviousImage();
});

document.addEventListener('keydown', function (e) {

    if (imageResize.style.display == 'block' && e.key == 'ArrowRight')
        getNextImage();
});

// Get the called img source

images.forEach(image => {
    image.addEventListener("click", () => {

        let currentImage = image;
        currentImageIndex = getImageIndex(currentImage);
        currentImageCounter.textContent = parseInt(currentImageIndex, 10) + 1;

        imgSrc = image.getAttribute('src');
        resizeImage(imgSrc);
    });
})

// Create dark layer and resize image

function resizeImage(setImgSrc) {
    navigationBar.style.display = 'none';
    imageResize.style.display = 'block';
    const createImgElement = document.createElement('img');
    createImgElement.setAttribute('src', setImgSrc);
    imageResize.appendChild(createImgElement);
}

// Imageview display exit listeners

exitBtn.addEventListener('click', () => imageViewExit());

document.addEventListener('keydown', function (e) {

    if (imageResize.style.display == 'block' && e.key == 'Escape')
        imageViewExit();
})

// Event for returning to gallery web page

function imageViewExit() {
    navigationBar.style.display = 'block';
    imageResize.style.display = 'none';
    const getImage = imageResize.querySelector('img');
    imageResize.removeChild(getImage);
}