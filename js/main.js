//  wOw JS
// new WOW().init();

$(document).ready(function () {
   $('.navbar-nav a').click(function (e) {

      var targetHref = $(this).attr('href');

      $('html, body').animate({
         scrollTop: $(targetHref).offset().top
      }, 1000);

      e.preventDefault();
   });
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
   var currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
   } else {
      document.getElementById("navbar").style.top = "-100px";
   }
   prevScrollpos = currentScrollPos;
}


// back to the top button
var btn = $('#button, #home');

$(window).scroll(function () {
   if ($(window).scrollTop() > 300) {
      btn.addClass('show');
   } else {
      btn.removeClass('show');
   }
});

btn.on('click', function (e) {
   e.preventDefault();
   $('html, body').animate({ scrollTop: 0 }, '300');
});
