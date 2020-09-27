(function () {
  'use-strict';

  function init() {
    const scrollToTop = document.querySelector('#btnTop');
    if (scrollToTop) {
      scrollToTop.addEventListener('click', function () {
        window.scrollTo(0, 0);
      });
      console.log('init');
    }
  }

  window.addEventListener('load', init);
})();
