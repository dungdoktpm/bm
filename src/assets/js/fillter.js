jQuery(document).ready(function ($) {
  // console.log($(`.gallery-container .gallery[data-filter="nature"]`));
  (function changeAttr(item) {
    $elem = jQuery(item);
    $elem.click(function (event) {
      event.preventDefault();
      $currentItem = jQuery(this);
      if ($currentItem.attr("data-filter") == 'all') {
        $('.gallery').show();
        $('.gallery').parent().show();
      }
      else {
        $('.gallery').hide();
        $('.gallery').parent().hide();
        $(`.gallery-container .gallery[data-filter=${$currentItem.attr("data-filter")}] `).show();
        $(`.gallery-container .gallery[data-filter=${$currentItem.attr("data-filter")}] `).parent().show();
      }
    });
  })(".gallery-menu__item");
});
