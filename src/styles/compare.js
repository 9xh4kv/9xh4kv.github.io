/* main.js */

/* Get the header element */
const header = document.querySelector('header');

/* Get the banner element */
const banner = document.querySelector('.banner');

/* Get the height of the banner element */
const bannerHeight = banner.offsetHeight;

/* Get the logo element */
const logo = document.getElementById('logo');

/* Add an event listener to the window object that will be triggered */
window.addEventListener('scroll', function() {
    /* Check the current scroll position */
    if (window.pageYOffset > bannerHeight) {
        /* Apply styles for scrolled state */
        header.classList.add('header-scrolled');
        logo.style.display = 'block';
    } else {
        /* Apply styles for default state */
        header.classList.remove('header-scrolled');
        logo.style.display = 'none';
    }
});
