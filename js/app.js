window.onscroll = function() {Sticky()};

var header = document.getElementById("Home");
var sticky = header.offsetTop;

function Sticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");

    header.style.opacity = '0.9';
    header.style.zIndex = '100';

  } else {
    header.classList.remove("sticky");
    header.style.opacity = '1';
  }
}

// Aos Plugin
AOS.init({
        duration : 1200,
    })