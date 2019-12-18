$(document).ready(function($){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    console.log("Clicked");
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      var hash_offs =  $(hash).offset().top-40;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: hash_offs
      }, 1110, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
      //  window.location.hash = hash;
      });
    } // End if
  });


});
