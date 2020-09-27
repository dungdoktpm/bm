
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
