const images = document.querySelectorAll('img');
const navBar = document.querySelector('nav.mobile');
const imageResize = document.querySelector('div.image-resize');
const mobileWrapper = document.querySelector('div.mobile-wrapper');
const exitBtn = document.querySelector('div.area');

exitBtn.addEventListener('click', () => {
    navBar.style.display = 'block';
    imageResize.style.display = 'none';
    const getImage = imageResize.querySelector('img');
    imageResize.removeChild(getImage);
})

images.forEach(image => {
    image.addEventListener("click", () => {
        const imgSrc = image.getAttribute('src');
        resizeImage(imgSrc);
    });
})

function resizeImage(setImgSrc) {
    navBar.style.display = 'none';
    imageResize.style.display = 'block';
    const createImgElement = document.createElement('img');
    createImgElement.setAttribute('src', setImgSrc);
    imageResize.appendChild(createImgElement);
}