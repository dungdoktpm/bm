// (function () {
//   'use-strict';

//   function init() {
//       let btnOpen = document.getElementsByClassName('btn--open');
//       console.log(btnOpen);
//       let btnClose = document.getElementsByClassName('btn--close');
//       console.log(btnClose);
//       let nav_list = document.getElementsByClassName('navbar__collapse');
//       console.log(nav_list);
//       btnOpen[0].addEventListener("click", function() {
//         console.log("aaa");
//         nav_list[0].style.display="block";
//         btnClose[0].style.display="block";
//         btnOpen[0].style.display="none";
//       });
//       btnClose[0].addEventListener("click", function() {
//         console.log("ccc");
//         nav_list[0].style.display="none";
//         btnOpen[0].style.display="block";
//         btnClose[0].style.display="none";
//       });

//   }

//   window.addEventListener('load', init);
// })();

// jQuery(document).ready(function($){

//   (function changeAttr(item) {
//       let btnOpen = $('.btn--open');
//       console.log(btnOpen);
//       // let btnClose = $('btn--close');
//       // console.log(btnClose);
//       let nav_list = $('.navbar__collapse');
//       console.log(nav_list);
//       $elem = jQuery(item);
//       // console.log($elem);
//       $elem.click(function (event) {
//         nav_list.show();
//       });
//     })(".btn--open");
// });


window.addEventListener("DOMContentLoaded", function (event) {
  console.log("meu");
  const navbarCollapse = document.querySelector('.navbar__collapse');
  console.log(navbarCollapse)
  const toggle = document.querySelector('.navbar__toggler.btn--open');
  console.log(toggle)
  toggle.addEventListener('click', function (event) {
    console.log("open")
    navbarCollapse.classList.toggle('active');
  })
});
