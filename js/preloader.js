/* Preloader */
// window.onload = function () {
//   let preloader = document.querySelector('.preloader'),
//       body = document.querySelector('body');
  
//   if (sessionStorage.getItem('showPreloader') == 'true') {
//     console.log("Сайт уже открывался, прелоадер не нужен");
//     // setTimeout(function () {
//     //   preloader.classList.toggle('preloader_none');
//     // }, 1500);
//     body.classList.toggle('body-overflow');
//   } else {
//     body.classList.toggle('body-overflow');
//     preloader.classList.toggle('preloader_fade');
//     setTimeout(function () {
//       preloader.classList.toggle('preloader_fade-out');
//       body.classList.toggle('body-overflow');
//       preloader.classList.toggle('preloader_z');
//     }, 1000);
    
//     sessionStorage.setItem('showPreloader', 'true');
//     console.log("Сайт открывается первый раз, запускаю прелоадер!");
//   }
// };

// $(window).on('load', function () {
//   if (!window.sessionStorage.getItem('showPreloader')) {
//     $('#preloader').toggle('preloader_fade');
//     setTimeout(function () {
//     $('#preloader').fadeOut('slow');
      
//       window.sessionStorage.setItem('showPreloader', true);
//     }, 1500);
    
//   } else {
//     $('#preloader').css('display', 'none');
//   }
// });