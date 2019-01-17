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

jQuery.jQueryRandom = 0;
jQuery.extend(jQuery.expr[":"],
{
    random: function(a, i, m, r) {
        if (i == 0) {
            jQuery.jQueryRandom = Math.floor(Math.random() * r.length);
        };
        return i == jQuery.jQueryRandom;
    }
});
