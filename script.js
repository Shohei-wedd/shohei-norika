$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});

$(window).on('load', function () {
        //ページをフェードインする
        $('.fadin').fadeIn(1000);
        $('#event').addClass('fade_in_up');
});

ScrollReveal().reveal('.img2', {
  duration: 1500,
  origin: 'bottom',
  viewFactor: 5,
  reset: true
});

ScrollReveal().reveal('.img3', {
  duration: 1500,
  origin: 'bottom',
  viewFactor: 5,
  reset: true
});


ScrollReveal().reveal('.img4', {
  duration: 1500,
  origin: 'bottom',
  viewFactor: 5,
  reset: true
});
