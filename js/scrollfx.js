const dark = document.querySelector("body");
const light = document.querySelectorAll("h1, h2:not(#navtitle), p, .links a, .material-icons");


window.onscroll = function () {
  stickynav();
  var top = window.scrollY;
  if (top > window.innerHeight / 10) {
    dark.classList.add("bg-dark");
    for (let i = 0; i < light.length; i++) {
      light[i].classList.add("fg-light");
    }
  } else {
    dark.classList.remove("bg-dark");
    for (let i = 0; i < light.length; i++) {
      light[i].classList.remove("fg-light");
    }
  }
};

var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;

function stickynav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
