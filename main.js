window.addEventListener('DOMContentLoaded', () => {
    const navBar = document.querySelector('nav.mobile');
    const logo = document.querySelector('nav.mobile ul li');
    const menuButton = document.querySelector('nav.mobile ul li:nth-child(2)');
    const mobileMainPage = document.querySelector('.mobile-wrapper');
    const mobileMenu = document.querySelector('.mobile-menu');
    const returnButton = document.querySelector('.return img');

    function animateMenu() {
        menuButton.style.display = 'none';
        logo.style.display = 'none';
        navBar.classList.toggle('animation');
        setTimeout(showMenu, 500);
    }


    function showMenu() {
        mobileMainPage.style.display = 'none';
        mobileMenu.style.display = 'block';
        navBar.classList.toggle('animation');
        menuButton.style.display = 'block';
        logo.style.display = 'block';
    }

    function hideMenu() {
        mobileMainPage.style.display = 'block';
        mobileMenu.style.display = 'none';
    }

    returnButton.addEventListener('click', hideMenu);
    menuButton.addEventListener('click', animateMenu);
})