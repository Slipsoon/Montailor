const header = document.querySelector('header');

function slide() {

    setTimeout(() => {
        header.classList.toggle('second-img');
    }, 6000)

    setTimeout(() => {
        header.classList.toggle('third-img');
    }, 12000)

    setTimeout(() => {
        header.classList.toggle('fourth-img');
    }, 18000)

    setTimeout(() => {
        header.classList.toggle('second-img');
        header.classList.toggle('third-img');
        header.classList.toggle('fourth-img');
    }, 19000)
};

windowWidth = window.innerWidth;

if (windowWidth < 935) {
    setInterval(slide, 18000);
    slide();
}