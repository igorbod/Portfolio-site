window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  
  AOS.init( {
    once: true
  });

  
  /* Smooth scroll */
const anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}
  
  /* add button "ScrollToTop" */
  const btnScrollToTop = document.querySelector("#btnScrollToTop");

  window.addEventListener("scroll", scrollFunction);

  function scrollFunction() {

    if (window.pageYOffset > 300) { //Show button when user scroll down 300px
      // btnScrollToTop.style.display = "block";
      btnScrollToTop.style.opacity = 1;

    } else {                        //Hide button
      // btnScrollToTop.style.display = "none";
      btnScrollToTop.style.opacity = 0;
    }
  }

  btnScrollToTop.addEventListener('click', function () {
    // window.scrollTo(0, 0); //Simple use without animation

    window.scrollTo({  //Simple use with smoth scroll
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  });

  /* Form validate*/
  $('.contact__form').validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: "Пожалуйста, введите свое имя",
        minlength: jQuery.validator.format("Имя должно быть не меньше {0} символов")
      },     
      email: {
        required: "Укажите пожалуйста ваш e-mail",
        email: "Неверный формат e-mail"
      }
    }
  });

  /* Hamburger Menu click */
  const ScrollLock = document.querySelector('body'),
        menu = document.querySelector('.header__nav'),
        menuItem = document.querySelectorAll('.header__menu-item'),
        hamburgerMenu = document.querySelector('.ham');
  
  hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('ham_active');
    menu.classList.toggle('header__nav_active');
    ScrollLock.classList.toggle('body_lock');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburgerMenu.classList.toggle('ham_active');
      menu.classList.toggle('header__nav_active');
      ScrollLock.classList.toggle('body_lock');
    });
  });
});