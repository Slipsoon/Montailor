    const navBar = document.querySelector('nav.mobile');
    const logo = document.querySelector('nav.mobile div.nav-logo');
    const hamburgerBtn = document.querySelector('nav.mobile div.nav-menu');
    const menuReturnBtn = document.querySelector('nav.desktop-menu div.return');
    const menuReturnContentBtn = document.querySelector('div.content-return');
    const spanLine = document.querySelector('span.menu__line');
    const mobileMainPage = document.querySelector('.mobile-wrapper');
    const mobileMenu = document.querySelector('.mobile-menu');
    const desktopMenu = document.querySelector('.desktop-menu-background');
    const desktopMenuContentLi = document.querySelectorAll('nav.desktop-menu section.desktop-menu-content div.menu li');
    const returnBtn = document.querySelector('.return img');
    const menuContentBtns = document.querySelectorAll('nav.mobile-menu li');
    const footer = document.querySelector('footer');

    // Check device height

    let windowWidth = window.innerWidth;

    // Check platform animation

    function checkPlatformAnimation() {

        if (windowWidth < 935) {
            animateMenu();
        } else {
            animateDesktopMenu();
        }
    }

    // Animate Desktop Menu

    function animateDesktopMenu(animationActive = true) {

        let styleDisplay = 'block';
        let styleBgColor = 'transparent';
        let timeoutCounter = 500;

        if (!animationActive) {
            styleDisplay = 'none';
            styleBgColor = '#000';
            timeoutCounter = 0;
        }

        desktopMenu.parentNode.style.display = styleDisplay;
        menuReturnBtn.classList.toggle('active');
        desktopMenu.classList.toggle('desktopMenuAnimation');

        setTimeout(() => {

            spanLine.style.backgroundColor = styleBgColor;
            menuReturnBtn.classList.toggle('cross');

            desktopMenuContentLi.forEach(li => {
                li.classList.toggle('desktopShowMenuContent');
            })
        }, timeoutCounter)
    }

    menuReturnContentBtn.addEventListener('click', () => animateDesktopMenu(false));

    desktopMenuContentLi.forEach(li => li.addEventListener('click', () => animateDesktopMenu(false)));

    // Animate Mobile Menu

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
    hamburgerBtn.addEventListener('click', checkPlatformAnimation);