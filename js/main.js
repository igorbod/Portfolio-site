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

  /* Open all links in new window */
  // let linkList = document.querySelectorAll('a.social__list-link');
  // console.log(linkList);

  
  // function listener(e) {
  //   if (e.target.tagName !== 'A') return;
  //   e.preventDefault();
  //   window.open(e.target.href, '_blank');
  //   document.removeEventListener('click', listener);
  // }

  //   // document.addEventListener('click', listener);

  // linkList.forEach(function(e) {
  //   e.addEventListener('click', listener);
  // });
});