// DOM elements

const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const setupUI = (user) => {
  if (user) {
    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    // toggle user elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};



// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

(function ($) {
  "use strict";
  var slideshow = (function () {
      var counter = 0,
          x,
          y,
          slides =  $("#slideshow .slide"),
          slidesLen = slides.length - 1;
      for (x = 0, y = 9999; x < slides.length; x += 1, y -= 1) {
          $(slides[x]).css("z-index", y);
      }
      return {
          startslideshow: function () {
              window.setInterval(function () {
                  if (counter === 0) {
                      slides.eq(counter).fadeOut();
                      counter += 1;
                  } else if (counter === slidesLen) {
                      counter = 0;
                      slides.eq(counter).fadeIn(function () {
                          slides.fadeIn();
                      });
                  } else {
                      slides.eq(counter).fadeOut();
                      counter += 1;
                  }
              }, 7000);
          }
      };
  }());
  slideshow.startslideshow();
  }(jQuery));
});

