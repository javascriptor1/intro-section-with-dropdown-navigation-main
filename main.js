"use strict";

const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");
const mobileMenu = document.querySelector("#mobile-menu");
const closeButton = document.querySelector("#close-button");

// grab feature and company mobile divs for mobile active state
const featureDiv = document.querySelector("#feature-mobile");
const companyDiv = document.querySelector("#company-mobile");
const featureMenuMobile = document.querySelector('#feature-menu-mobile')
const companyMenuMobile = document.querySelector('#company-menu-mobile')


hamburgerMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  hamburgerMenu.classList.add("hidden");
  overlay.classList.remove("hidden");
});

closeButton.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  hamburgerMenu.classList.remove("hidden");
  overlay.classList.add("hidden");
});


featureDiv.addEventListener('click',()=>{
    featureMenuMobile.classList.toggle('hidden')
})
companyDiv.addEventListener('click',()=>{
    companyMenuMobile.classList.toggle('hidden')
})