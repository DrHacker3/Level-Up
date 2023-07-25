// Button
let mybutton = document.getElementById("myBtn");

// show the button on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}

// scroll back to top of page on click
function topFunction() {
  document.body.scrollTop = 0; // safari functionality
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera funtionality
}


// Subscribe to newsletter
var modal = document.getElementById('id01');