// DOM elements

const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details')
const adminItems = document.querySelectorAll('.admin');
const managerItems = document.querySelector("#manager");
const setupUI = (user) => {
    if (user) {

        if (user.admin != undefined) {
            adminItems.forEach(item => item.style.display = 'block');
            document.querySelector('#manager').style.display = 'block'
        } 

        db.collection('users').doc(user.uid).get().then(doc => {

            // toggle user UI elements
            const html = `<div>Logged in as ${user.email}</div>
                          <div>${doc.data().role}</div>
                          <div>${doc.data().bio}</div>
               <div class="pink-text">${user.admin ? 'Admin': ''}</div>
`

            accountDetails.innerHTML = html;

        })




        loggedInLinks.forEach(item => {
           console.log(item,"item");  
            item.style.display = 'block'
        
        });

        if(user.admin===undefined){
            console.log(user.admin, "admin");
            document.querySelector('#manager').style.display = 'none'
        };

        loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
        adminItems.forEach(item => item.style.display = 'none');
        //hide account info
        accountDetails.innerHTML = '';
        // toggle user elements
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
};



// setup materialize components
document.addEventListener('DOMContentLoaded', function () {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
    // Init Carousel
    //  $('.carousel').carousel();

    //  // Init sideBar
    // //  $(".button-collapse").sideNav();
    (function ($) {
        "use strict";
        var slideshow = (function () {
            var counter = 0,
                x,
                y,
                slides = $("#slideshow .slide"),
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