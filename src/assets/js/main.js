$(document).ready(function(){
  $('.parallax').parallax();
  $(".dropdown-trigger").dropdown({
    coverTrigger: false,
    constrainWidth: false,
  });
  $('.datepicker').datepicker({
    showClearBtn: true,
  });
  $('select').formSelect();
  $('.scrollspy').scrollSpy();
  $('.materialboxed').materialbox();
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
});
