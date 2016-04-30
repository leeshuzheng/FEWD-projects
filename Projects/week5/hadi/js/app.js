$( document ).ready(function() {
  // Handler for .ready() called.


$("a").click(function(event) {
    event.preventDefault();
  })
  // to prevent the link from opening even after clicking, so that the link does not open and shift the page up


// JAVASCRIPT ALL GOES BELOW

  // write a default hide function
$("#show-this-on-click").hide()
$(".readless").hide()

// write a show function
      // attach the function to the button "read more"
$(".readmore").click (
  function() {
    $("#show-this-on-click").slideDown(400);
    $(".readless").show();
    $(".readmore").hide();
  }
)


// write a hide function
  // attach the function to the button "read less"
$(".readless").click(
  function() {
    $("#show-this-on-click").slideUp(400);
    $(".readless").hide();
    $(".readmore").show();
  })

// ASIDE STUFF

$(".learnmore").click(
  function() {
    $("#learnmoretext").slideDown(400);
    $(".learnmore").hide();
  }
)





  // executes javascript only once html files are loaded, so can put javascript in <head>
});
