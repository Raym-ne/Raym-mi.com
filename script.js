'use strict';



/**
 * add event on element
 */

const addEventOnelen = function(elen, type, callback) {
    if    (elen.length > 1) {
        for(let i = 0; i < elen.length; i++) {
            elen[i].addEventListener(type, callback);
        }
    } else {
      elen.addEventListener(type, callback);
    }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector('[data-navbar]');
const navbarLinks = document.querySelectorAll('[data-nav-link]');
const navToggler = document.querySelector('[data-nav-toggler]');

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
}

addEventOnelen(navToggler, 'click', toggleNavbar);

const closeNavbar = function () {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
}

addEventOnelen(navbarLinks, "click", closeNavbar);

/**
 * header active on scroll doan to 100px
 */

const header = document.querySelector('[data-header]');

const activeHeader = function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

addEventOnelen(window, "scroll", activeHeader);





/**
 * filter tab
 */

const tabCard = document.querySelectorAll('[data-tab-card]');

let lastTabCard = tabCard[0];

const navigateTab = function () {
    lastTabCard.classList.remove("active");
    this.classList.add("active");
    lastTabCard = this;
}

addEventOnelen(tabCard, "click", navigateTab);



/**
 * Read More
 */

const readMoreBtn = document.querySelector('.read-mor-btn');

readMoreBtn.addEventListener('click', () => {readMoreBtn.parentNode.classList.toggle('show-more'); 
    readMoreBtn.textContent = readMoreBtn.parentNode.classList.contains('show-more') ? 'Read Less' : 'Read More';});


