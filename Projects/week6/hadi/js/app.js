$(document).ready(function() {
  // to allow for js scripts to be rendered

// use form or input for preventDefault to prevent form submission
// allowing form submission will give css precedence in rendering the background image
$('#form1').click(function(event) {
event.preventDefault();
});

// JAVASCRIPT GOES BELOW HERE

// link city input with js
var $button = $('#submit-btn');


$button.click(function () {
  // .val will obtain the string entered by the user
  // .val to be located within the function so the string is updated each time, previously was located outside the function
  var $city = $('#city-type').val();
  // for sydney
  if ($city == "Sydney" || $city == "SYD") {
  $('body').attr("class", "sydney");
}
  // for austin
  if ($city == "Austin" || $city == "ATX") {
  $('body').attr("class", "austin");
}
  // for la
  if ($city == "Los Angeles" || $city == "LA" || $city == "LAX") {
  $('body').attr("class", "la");
}
  // for sanfran
  if ($city == "San Francisco" || $city == "SF" || $city == "Bay Area") {
  $('body').attr("class", "sf");
}
  // for nyc
  if ($city == "New York City" || $city == "New York" || $city == "NYC") {
  $('body').attr("class", "nyc");
}


});

/* function citybackground () {
  if ($city === "sydney") {
    $button.click( function () {
    $('body').attr("class", "sydney");
  }
}
}; */

});
