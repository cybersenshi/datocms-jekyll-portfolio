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
  $('.sidenav').sidenav();
  var quotes = [
  '<h4>"It was very pleasant working with such a professional staff. You knew exactly what we wanted and needed to make our Marathon a hit. Everything was done quickly, and in a professional manner."</h4>- Ken Delahoussaye, Marine Corps Logistics Manager',
  '<h4>"Our employees are still raving about the event, the celebrity feel, the elegance, the lights and sound, the dance floor and on and on and on….. I have you two to thank.  From start to finish you two have been remarkable in bringing my vision to life and in such an incredible way.  Thank you for your professionalism, execution and remaining on site to maintain a seamless event. I will never work with any other event team than NOMAD!  We are lucky to have such a winning group on our side and I look forward to our next big event!"</h4>- Tracy Steinbach, Car Fax',
  '<h4>"The whole team ADORED working with Nomad and I really appreciate your expertise throughout the Sweet Green Festival."</h4>- Mimi Webb, Small Girls PR',
  '<h4>"I wanted to thank all of you for another job well done! Each of you in your own expertise, including the staff that supports you, helped to make the HP event with the One Republic concert another great success for our client."</h4>- Steve Oliker, Event Producer',
  '<h4>"I can\'t thank you enough for all that you did last night - it exceeded my expectations!!! Absolutely awesome. Everyone was talking about the lighting and "images", including our director. And the fireworks - perfect! They loved it."</h4>- Tina Karl, Special Events Manager, Natural History Museum',
  ];
  $('#quoteholder').append(quotes[Math.floor(Math.random() * quotes.length)]);
});
