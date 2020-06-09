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