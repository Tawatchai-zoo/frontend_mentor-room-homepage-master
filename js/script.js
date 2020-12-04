const elem = {
    btnSlideContainer: document.querySelector('.btn-slide-container'),
    btnSlideNext: document.querySelector('#btn-next'),
    btnSlidePrev: document.querySelector('#btn-prev'),

    showCaseContainer: document.querySelector('.showcase-container'),
    carouselImg: document.querySelector('.slideshow-img'),
    article: document.querySelector('.article-header'),

    imgBottom1: document.querySelector('.img__bottom-1'),
    imgBottom2: document.querySelector('.img__bottom-2'),
    about: document.querySelector('.about'),

    navBurger: document.querySelector('.nav__burger'),
    navLink: document.querySelector('.nav__link'),

}

elem.navBurger.addEventListener('click', e => {
    elem.navLink.classList.toggle('nav__showing');
    if (elem.navLink.classList.contains('nav__showing')) {
        document.querySelector('.nav__burger-img').src = 'images/icon-close.svg'
    } else {
        document.querySelector('.nav__burger-img').src = 'images/icon-hamburger.svg'
    }
})

// set btn slide width 
const resizeBtnSlide = () => {
    const btnSlideWidth = Math.floor(((elem.imgBottom1.clientWidth + elem.about.clientWidth) - elem.showCaseContainer.clientWidth) / 2);
    if (window.screen.width > 1200) {
        elem.btnSlideNext.style.width = btnSlideWidth + 'px';
        elem.btnSlidePrev.style.width = btnSlideWidth + 'px';
        elem.btnSlideContainer.style.right = `-${btnSlideWidth * 2}px`;
    } else {
        elem.btnSlideContainer.style.right = 0;
        elem.btnSlidePrev.style.width = '4rem';
        elem.btnSlideNext.style.width = '4rem';
    }
}
resizeBtnSlide();
window.addEventListener('resize', resizeBtnSlide)

let counter = 1;
elem.btnSlideNext.addEventListener('click', e => {
    counter < 3 ? counter++ : counter = 1;
    elem.carouselImg.src = `images/desktop-image-hero-${counter}.jpg`;
    elem.article.innerHTML = article[counter - 1]
});
elem.btnSlidePrev.addEventListener('click', e => {
    counter > 1 ? counter-- : counter = 3;
    elem.carouselImg.src = `images/desktop-image-hero-${counter}.jpg`;
    elem.article.innerHTML = article[counter - 1]
});

const article = [
    `<h1>Discover innovative ways to decorate</h1>
    <p>
        We provide unmatched quality, comfort, and style for property owners across the country. Our
        experts
        combine form and function in bringing your vision to life. Create a room in your own style with
        our
        collection and make your property a reflection of you and what you love.
    </p>
    <a href="#" class="btn btn-shownow">Show now
        <img src="images/icon-arrow.svg" alt="">
    </a>`,

    `<h1>We are available all across the globe</h1>
    <p>
        With stores all over the world, it's easy for you to find furniture for your home or place of business.
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
        store locator. Any questions? Don't hesitate to contact us today.
    </p>
    <a href="#" class="btn btn-shownow">Show now
        <img src="images/icon-arrow.svg" alt="">
    </a>`,

    `<h1>Manufactured with the best materials</h1>
    <p>
        Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
        to ensure that every product is made as perfect and as consistent as possible. With three decades of
        experience in this industry, we understand what customers want for their home and office.
    </p>
    <a href="#" class="btn btn-shownow">Show now
        <img src="images/icon-arrow.svg" alt="">
    </a>`,
];