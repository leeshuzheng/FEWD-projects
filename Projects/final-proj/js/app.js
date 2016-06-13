$(document).ready(function() {

  // $('').click(function(event) {
  // event.preventDefault();
  // });
$('#myBlock').vide('../video/mujivideo');
$('#rightAtHome').vide('../video/rightathome');


$('#fullpage').fullpage({
  // anchors:['page1', 'page2', 'page3', 'page4', 'page5'],
  autoScrolling: false,
  normalScrollElements: ['#campaignContainer, .informationContainer'],
  fitToSection: false
});

window.sr = ScrollReveal({reset: true});

sr.reveal('.animate', {duration: 600 });

$('#rightAtHome').resize(function() {
  console.log('resizing!');
})

});
