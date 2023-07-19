"use strict";

const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");
const mobileMenu = document.querySelector("#mobile-menu");
const closeButton = document.querySelector("#close-button");

// grab feature and company mobile divs for mobile active state
const featureDiv = document.querySelector("#feature-mobile");
const companyDiv = document.querySelector("#company-mobile");
const featureMenuMobile = document.querySelector("#feature-menu-mobile");
const companyMenuMobile = document.querySelector("#company-menu-mobile");

hamburgerMenu.addEventListener("click", () => {
  toggleMenu();
});

closeButton.addEventListener("click", () => {
  toggleMenu();
});

featureDiv.addEventListener("click", () => {
  featureMenuMobile.classList.toggle("hidden");
});
companyDiv.addEventListener("click", () => {
  companyMenuMobile.classList.toggle("hidden");
});

function toggleMenu() {
  mobileMenu.classList.toggle("hidden");
  hamburgerMenu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}
