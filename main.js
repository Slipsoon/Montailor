window.addEventListener('DOMContentLoaded', () => {
    const navBar = document.querySelector('nav.mobile');
    const logo = document.querySelector('nav.mobile ul li');
    const hamburgerBtn = document.querySelector('nav.mobile ul li:nth-child(2)');
    const mobileMainPage = document.querySelector('.mobile-wrapper');
    const mobileMenu = document.querySelector('.mobile-menu');
    const returnBtn = document.querySelector('.return img');
    const menuContentBtns = document.querySelectorAll('nav.mobile-menu div.menu li');

    function animateMenu() {
        hamburgerBtn.style.display = 'none';
        logo.style.display = 'none';
        navBar.classList.toggle('animation');
        setTimeout(showMenu, 500);
    }

    function showMenu() {
        mobileMainPage.style.display = 'none';
        mobileMenu.style.display = 'block';
        navBar.classList.toggle('animation');
        hamburgerBtn.style.display = 'block';
        logo.style.display = 'block';
    }

    function hideMenu() {
        mobileMainPage.style.display = 'block';
        mobileMenu.style.display = 'none';
    }

    menuContentBtns.forEach(menuContentBtn => {
        menuContentBtn.addEventListener('click', hideMenu);
    })

    returnBtn.addEventListener('click', hideMenu);
    hamburgerBtn.addEventListener('click', animateMenu);
})