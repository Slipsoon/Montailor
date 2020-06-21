const header = document.querySelector('header');
const LastImgTitle = document.querySelector('header').lastElementChild;

function slide() {

    setTimeout(() => {
        header.classList.toggle('second-img');
    }, 6000)

    setTimeout(() => {
        header.classList.toggle('third-img');
        LastImgTitle.lastElementChild.classList.toggle('animate');
    }, 12000)

    setTimeout(() => {
        header.classList.toggle('fourth-img');
        LastImgTitle.lastElementChild.classList.toggle('animate');
    }, 18000)

    setTimeout(() => {
        header.classList.toggle('second-img');
        header.classList.toggle('third-img');
        header.classList.toggle('fourth-img');
    }, 20000)
};

slide();
setInterval(slide, 18000);