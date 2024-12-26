'use strict';



/**
 * add event on element
 */

const addEventOneLen = function(elen, type, callback) {
    if(elen.length > 1) {
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

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
}

addEventOneLen(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
}

addEventOneLen(navbarLinks, "click", closeNavbar);

/**
 * header active on scroll doan to 100px
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

addEventOneLen(window, "scroll", activeHeader);





/**
 * filter tab
 */

const tabCard = document.querySelectorAll("[data-tab-card]");

let lastTabCard = tabCard[0];

const navigateTab = function () {
    lastTabCard.classList.remove("active");
    this.classList.add("active");
    lastTabCard = this;
}

addEventOneLen(tabCard, "click", navigateTab);






