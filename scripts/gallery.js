const images = document.querySelectorAll('section.gallery-content img');
const navigationBar = document.querySelector('nav.mobile');
const imageResize = document.querySelector('div.image-resize');
const mobileWrapper = document.querySelector('div.mobile-wrapper');
const exitBtn = document.querySelector('div.area');

// Get the called img source

images.forEach(image => {
    image.addEventListener("click", () => {
        const imgSrc = image.getAttribute('src');
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

// Event for returning to web page

exitBtn.addEventListener('click', () => {
    navigationBar.style.display = 'block';
    imageResize.style.display = 'none';
    const getImage = imageResize.querySelector('img');
    imageResize.removeChild(getImage);
})