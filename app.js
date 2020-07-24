// Mobile

// Header Navbar Icon Toggle

const menuIcon = document.querySelector('.header__menu-icon');
const navContainer = document.querySelector('.header__nav-container');
let navItems = document.getElementsByClassName('header__nav-item');

navItems = Array.from(navItems);

$(document).ready(() => {
    let clickCount = 1;

    $(menuIcon).click(() => {
        // $(nav).removeClass("animate__animated animate__fadeInRight animate__fadeOutRight");
        // if((clickCount % 2 === 0)){
            $(navContainer).css({"z-index":"50"});
            $(navContainer).removeClass("animate__animated animate__fadeOutRight");
            $(navContainer).addClass("animate__animated animate__fadeInRight");
        // }
        // else{
        //     $(navContainer).removeClass("animate__animated animate__fadeInRight");
        //     $(navContainer).addClass("animate__animated animate__fadeOutRight");
        // }
        // clickCount++;
    })

});

// Header Nav Back Icon 

const backButton = document.querySelector('.header__back-icon');

$(backButton).click(() => {
    $(navContainer).removeClass("animate__animated animate__fadeInRight");
    $(navContainer).addClass("animate__animated animate__fadeOutRight");
});