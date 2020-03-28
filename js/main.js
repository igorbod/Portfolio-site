/* Preloader */
$(window).on('load', function () {
  // Get vertical scrollbar width  
  let getScrollbarWidth = function () {
    let div, width = getScrollbarWidth.width;
    if (width === undefined) {
      div = document.createElement('div');
      div.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
      div = div.firstChild;
      document.body.appendChild(div);
      width = getScrollbarWidth.width = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
    }
    return width;
  };
    
  // Set flag in session storage for loading preloader
  if (!sessionStorage.getItem('showPreloader')) {
    setTimeout(function () {
      $('.preloader').animate({
        opacity: "0"
      }, 50);
      $("body :not(.preloader) >").animate({
        opacity: "1"
      }, 50);
      sessionStorage.setItem('showPreloader', true);
      $('body').toggleClass('body-overflow');
      $('.preloader svg').css('margin-left', getScrollbarWidth());
      setTimeout(function () {
        $('.preloader').css('display', 'none');
      }, 1000);
    }, 500);
  } else {
    $('.preloader').css('opacity', '0');
    setTimeout(function () {
      $('.preloader').css('display', 'none');
    }, 1000);
    $('body').toggleClass('body-overflow');
    $('.preloader svg').css('margin-left', getScrollbarWidth());
    
  }
});


/* Main Script */
window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  
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
      btnScrollToTop.style.opacity = 1;

    } else {                        //Hide button
      btnScrollToTop.style.opacity = 0;
    }
  }

  btnScrollToTop.addEventListener('click', function () {
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
        required: "Укажите, пожалуйста, Ваш e-mail",
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

  // Contact from submit
  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");



      $('form').trigger('reset');
    });
    return false;
  });
});