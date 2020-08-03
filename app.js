//Animation function

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;

    element.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      element.classList.remove(`${prefix}animated`, animationName);
      element.removeEventListener('animationend', handleAnimationEnd);

      resolve('Animation ended');
    }

    element.addEventListener('animationend', handleAnimationEnd);
  });

// Mobile

// Header Navbar Icon Toggle

if($(document).width() < 768){
  const menuIcon = document.querySelector(".header__menu-icon");
const navContainer = document.querySelector(".header__nav-container");
let navItems = document.getElementsByClassName("header__nav-item");

navItems = Array.from(navItems);

$(document).ready(() => {
  $(menuIcon).click(() => {

    $(navContainer).css({"z-index":"10"});
    animateCSS(navContainer,"fadeInRight").then(()=>{
        $(navContainer).css({"opacity":"100%"});
    });
  })
 
});

// Header Nav Back Icon

const backButton = document.querySelector(".header__back-icon");
const dropdownBackButton = document.querySelector(
  ".header__dropdown-back-icon"
);

// Main menu Back Button
$(backButton).click(() => {
    
    animateCSS(navContainer,"fadeOutRight").then(()=>{
        $(navContainer).css({"opacity":"0%", "z-index":"-10"});
    });
});

// Dropdowns

const dropdownBtn = document.querySelector(".header__dropdown-btn");
const dropdownList = document.querySelector(".header__dropdown-list");

//Study dropdown appears

$(dropdownBtn).click(()=>{

    $(dropdownList).css({"z-index":"20"});
    animateCSS(dropdownList,"fadeInRight").then(()=>{
        $(dropdownList).css({"opacity":"100%"});
    });

    
});

//Back Button for Study dropdown
$(dropdownBackButton).click(() => {

    animateCSS(dropdownList,"fadeOutRight").then(()=>{
        $(dropdownList).css({"opacity":"0%","z-index":"-20"});
    });
})

}
