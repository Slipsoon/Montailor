const sliderImages = document.querySelectorAll('header div');

let sliderImgList = [];
let imageLeftPosition = [0, 0, 0, 0];

sliderImages.forEach(sliderImage => {
    sliderImgList.push(sliderImage);
});

function slide() {

    for (let i = 0; i < sliderImgList.length; i++) {
        imageLeftPosition[i] -= 100;
        sliderImgList[i].style.left = `${imageLeftPosition[i]}vw`;
    }

    moveLeftSlideToRightEdge();
}

function moveLeftSlideToRightEdge() {

    for (imagePosition in imageLeftPosition) {
        if (imageLeftPosition[imagePosition] == -300)
            imageLeftPosition[imagePosition] = 100;
    }
}


document.addEventListener('click', slide);