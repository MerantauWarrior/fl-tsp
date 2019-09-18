$( document ).ready(function() {

  $('.header__mobile-menu').on('click', function () {
    $('.header__menu').show();
  });
  $('.header__menu-close').on('click', function () {
    $('.header__menu').hide();
  })

});