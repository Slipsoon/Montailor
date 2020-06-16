const images = document.querySelectorAll('section.gallery-content img');
const navigationBar = document.querySelector('nav.mobile');
const imageResize = document.querySelector('div.image-resize');
const mobileWrapper = document.querySelector('div.mobile-wrapper');
const exitBtn = document.querySelector('div.area');
const prevBtn = document.querySelector('button.previous');
const nextBtn = document.querySelector('button.next');

// -- GALLERY IMAGE FEATURES -- 

// Contains current opened image index
let currentImageIndex;

// Get list (array) of images
const imageArray = function getImageList() {
    let imagesList = [];

    images.forEach(image => {
        imagesList.push(image);
    })

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
}

// Listeners for next and previous buttons
prevBtn.addEventListener('click', () => getPreviousImage());
nextBtn.addEventListener('click', () => getNextImage());

// Get the called img source

images.forEach(image => {
    image.addEventListener("click", () => {

        let currentImage = image;
        currentImageIndex = getImageIndex(currentImage);

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

// Event for returning to gallery web page

exitBtn.addEventListener('click', () => {
    navigationBar.style.display = 'block';
    imageResize.style.display = 'none';
    const getImage = imageResize.querySelector('img');
    imageResize.removeChild(getImage);
})