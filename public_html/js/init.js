jQuery(document).ready(function($){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.header').css("background-color", "#fff");
      $('.header').css("height", "90px");
      $('.header-branding .branding-text').css("top", "30px");
      $('.header-branding .top-pagination').css("margin-top", "0.5em");
      $('.header #logo-image').attr('src','http://thenicheguys.com/clients/allthingshair/img/branding-compressed.jpg');
    } else {
      $('.header').css("background-color", "#fff");
      $('.header').css("height", "160px");
      $('.header-branding .branding-text').css("top", "100%");
      $('.header-branding .top-pagination').css("margin-top", "2em");   
      $('.header #logo-image').attr('src','http://thenicheguys.com/clients/allthingshair/img/logo.svg');
    }
  });
});


