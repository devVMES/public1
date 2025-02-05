'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

// JavaScript to handle form submission and show success message
document.getElementById('newsletterForm').addEventListener('submit', function (event) {
  event.preventDefault(); 


  setTimeout(() => {
   
    document.querySelector('.input-field').style.display = 'none';
    document.querySelector('.btn-secondary').style.display = 'none';


    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

   
    setTimeout(() => {

      document.getElementById('newsletterForm').reset();

     
      document.querySelector('.input-field').style.display = 'block';
      document.querySelector('.btn-secondary').style.display = 'block';


      successMessage.style.display = 'none';
    }, 5000);
  }, 1000); 
});