const header = document.querySelector('.header');
const banner = document.querySelector('.banner');
const bannerHeight = banner.offsetHeight;
const logo = document.querySelector('.logo'); // add this line

window.addEventListener('scroll', function() {
    if (window.pageYOffset > bannerHeight) {
        header.classList.add('header-scrolled');
        logo.style.display = 'block';
    } else {
        header.classList.remove('header-scrolled');
        logo.style.display = 'none';
    }
});

const navLinks = document.querySelectorAll('.nav-list li');
const mainContent = document.querySelector('.main-content');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        const page = this.getAttribute('data-page');
        const fileName = `${page}.html`;
        fetch(fileName)
            .then(response => response.text())
            .then(data => {
                mainContent.innerHTML = data;
            });
    });
});
