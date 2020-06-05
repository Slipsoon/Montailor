    const navBar = document.querySelector('nav.mobile');
    const logo = document.querySelector('nav.mobile div.nav-logo');
    const hamburgerBtn = document.querySelector('nav.mobile div.nav-menu');
    const mobileMainPage = document.querySelector('.mobile-wrapper');
    const mobileMenu = document.querySelector('.mobile-menu');
    const desktopMenu = document.querySelector('.desktop-menu-background');
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

    function animateDesktopMenu() {
        desktopMenu.parentNode.style.display = 'block';
        desktopMenu.classList.toggle('desktopMenuAnimation');
    }

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

    // Show Google Map

    createGoogleMap(windowWidth);

    window.addEventListener("resize", () => {
        windowWidth = window.innerWidth;
        createGoogleMap(windowWidth);
    })

    function createGoogleMap(windowWidth) {

        const checkMapExists = document.querySelector('div.map');

        if (windowWidth < 935 && checkMapExists) {
            footer.removeChild(googleMap);

        } else if ((windowWidth >= 935) && (checkMapExists == null)) {

            const title = document.createElement('h1');
            title.textContent = 'Nasza lokalizacja!';

            googleMap = document.createElement('div');
            googleMap.classList.add('map');
            footer.appendChild(googleMap);

            const iFrame = document.createElement('iframe');
            iFrame.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.6580158229513!2d20.0123723158864!3d50.09268942095907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47164500ac391ae9%3A0xf66735abb2546cf8!2sPracownia%20Krawiecka%20-%20Mon%20Tailor!5e0!3m2!1spl!2spl!4v1589716470947!5m2!1spl!2spl");
            iFrame.style.border = '0';
            iFrame.setAttribute('width', '100%');
            iFrame.setAttribute('height', '250');
            iFrame.setAttribute('frameborder', '0');
            iFrame.setAttribute('allowfullscreen', '');
            iFrame.setAttribute('aria-hidden', 'false');

            googleMap.appendChild(title);
            googleMap.appendChild(iFrame);
        }
    }