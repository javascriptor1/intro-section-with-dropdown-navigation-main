'use strict'

const hamburgerMenu = document.querySelector('#hamburger-menu');
const overlay = document.querySelector('#overlay');
const mobileMenu = document.querySelector('#mobile-menu');
const closeButton = document.querySelector('#close-button')

hamburgerMenu.addEventListener('click',()=>{
    mobileMenu.classList.remove('hidden')
    hamburgerMenu.classList.add('hidden')
    overlay.classList.remove('hidden')
})

closeButton.addEventListener('click',()=>{
    mobileMenu.classList.add('hidden')
    hamburgerMenu.classList.remove('hidden')
    overlay.classList.add('hidden')

})


