$('.menu__burger').on('click', function () {
  $('.menu__burger, .menu').toggleClass('active');
  $('body').toggleClass('lock');
});

$('.menu__list-link').on('click', function () {
  $('.menu__burger, .menu').removeClass('active');
  $('body').removeClass('lock');
});


var hoy = 0;



