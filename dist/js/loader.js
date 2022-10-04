const fadeEffect = setInterval(() => {
    const preloader = document.querySelector('.preloader');

    if (!preloader.style.opacity) {
        preloader.style.opacity = 1;
    }

    if (preloader.style.opacity > 0) {
        preloader.style.opacity -= 0.1;
    } else {
        clearInterval(fadeEffect);
    }

}, 170);

window.addEventListener('load', fadeEffect);
