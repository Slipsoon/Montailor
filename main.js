window.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('nav.mobile ul li:nth-child(2)');
    const mobileMainPage = document.querySelector('.mobile-wrapper');
    const mobileMenu = document.querySelector('.mobile-menu');
    const returnButton = document.querySelector('.return img');

    menuButton.addEventListener('click', () => {
        mobileMainPage.style.display = 'none';
        mobileMenu.style.display = 'block';
    })

    returnButton.addEventListener('click', () => {
        mobileMainPage.style.display = 'block';
        mobileMenu.style.display = 'none';
    })
})