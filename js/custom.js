// Custom JavaScript
// STEP 15: Call up the carousel using the id, and use the .carousel() method create the options object
$('#carousel-cars').carousel({
  // STEP 16: Change the interval to 5 seconds (set in milliseconds)
  interval: 5000,
  //   wrap: false,
  touch: false,
  // keyboard controls disabled
  keyboard: false,
});

// STEP 17: Try an event handler to zoom up the .carousel-caption after the slide completes sliding - by adding a class when the slide has finished animating, and removing it when it begins
$('#carousel-cars').on('slide.bs.carousel', function () {
  // removing the css animation class
  $('.carousel-caption').removeClass('zoomit');
});
$('#carousel-cars').on('slid.bs.carousel', function () {
  // adding the css animation class
  $('.carousel-caption').addClass('zoomit');
});

// the logs don't work in firefox for some reason
console.log('test');
