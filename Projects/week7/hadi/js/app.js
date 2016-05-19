$(document).ready(function() {
  // to allow for js scripts to be rendered

// use form or input for preventDefault to prevent form submission
// allowing form submission will give css precedence in rendering the background image
$('').click(function(event) {
event.preventDefault();
});

// JAVASCRIPT GOES BELOW HERE

//var $button = $('#submit-btn');
// variable dropdownMenu to store menu
var $dropdownMenu = $('#city-type');
// array storing the cities
var cityArray = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];

// for loop to add values to the dropdown menu
for (var i = 0; i < cityArray.length; i++) {
    var optionHolder = $('<option></option>');
    optionHolder.append(cityArray[i]);
// add .val because <option> has a value
    optionHolder.val(cityArray[i]);
    $dropdownMenu.append(optionHolder);
};

function changeCity () {
  var $city = $dropdownMenu.val();
  if ($city == cityArray[0]) {
    $('body').attr('class', 'nyc');
  }
  else if ($city == cityArray[1]) {
    $('body').attr('class', 'sf');
  }
  else if ($city == cityArray[2]) {
    $('body').attr('class', 'la');
  }
  else if ($city == cityArray[3]) {
    $('body').attr('class', 'austin');
  }
  else {
    $('body').attr('class', 'sydney');
  }
}

$dropdownMenu.change(changeCity);

// link function to option.change
// $dropdownMenu.change(function() {
//   alert('yo bois wadap');
//   // alert works
// })





/////////////////////// WEEK 6 ASSIGNMENT BELOW ///////////////////////////

//$button.click(function () {
//  // .val will obtain the string entered by the user
//  // .val to be located within the function so the string is updated each time, previously was located outside the function
//  var $city = $('#city-type').val();
//  // for sydney
//  if ($city == "Sydney" || $city == "SYD") {
//  $('body').attr("class", "sydney");
//}
//  // for austin
//  if ($city == "Austin" || $city == "ATX") {
//  $('body').attr("class", "austin");
//}
//  // for la
//  if ($city == "Los Angeles" || $city == "LA" || $city == "LAX") {
//  $('body').attr("class", "la");
//}
//  // for sanfran
//  if ($city == "San Francisco" || $city == "SF" || $city == "Bay Area") {
//  $('body').attr("class", "sf");
//}
//  // for nyc
//  if ($city == "New York City" || $city == "New York" || $city == "NYC") {
//  $('body').attr("class", "nyc");
//}


});
