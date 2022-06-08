function showElements(elements) {
  for (var s = 0; s < elements.length; s++) {
    elements[s].setAttribute("data-visible", "visible");
  }
}

function hideElements(elements) {
  for (var h = 0; h < elements.length; h++) {
    elements[h].setAttribute("data-visible", "invisible");
  }
}

function selectAll(elements) {
  for (var z = 0; z < elements.length; z++) {
    return elements[z];
  }
}

// thanks https://photics.com/hero-1-help-my-map-does-not-work/
function update() {
  var selectedApp = document.querySelector(
    "input[name='mainFilter']:checked"
  ).id;
  var selectedAppClass = document.querySelector(
    "input[name='mainFilter']:checked"
  ).value;

  var selectedFilter = document.querySelector(
    "input[name='secondaryFilter']:checked"
  ).id;
  var selectedFilterClass = document.querySelector(
    "input[name='secondaryFilter']:checked"
  ).value;

  hideElements(document.getElementsByClassName("filterEl"));

  // shows elements filtered by app and price
  if (document.getElementById(selectedApp).checked) {
    if (document.getElementById(selectedFilter).checked) {
      showElements(
        document.querySelectorAll(
          "." + selectedAppClass + "." + selectedFilterClass
        )
      );
    }
  } else {
    hideElements(document.getElementsByClassName(selectedAppClass));
  }

  // checks if any element's data-visible attribute is visible
  if (document.querySelectorAll("[data-visible='visible']").length > 0) {
    document.getElementById("noResult").classList.add("hidden");
    document.getElementById("noResult").style.pointerEvents("auto");
  } else {
    document.getElementById("noResult").classList.remove("hidden");
    document.getElementById("noResult").style.pointerEvents("none");
  }
  console.log(selectedApp);
}

document.addEventListener("input", update);
// about menu

var mainEl = document.querySelector("main");
if (document.querySelector("body").id == "home") {
  var menuEl = document.querySelector("#filterAboutMenu");
  var menuBtn = document.querySelector("#aboutLink");
}

var menuBar = document.querySelector("#links");
var body = document.querySelector("body");
var positionOffset = 0;

var desktopBreakpoint = window.matchMedia("(min-width: 999px)");

if (desktopBreakpoint.matches) {
  var positionOffset = 4;
}

function getMenuOffset() {
  offsetBoundingClient = menuBar.getBoundingClientRect();
  offset = offsetBoundingClient.bottom;
  return offset;
}

function setMenuOffset() {
  if (body.id == "home") {
    menuEl.style.top = getMenuOffset() + positionOffset + "px";
  }
  if (desktopBreakpoint.matches) {
    mainEl.style.top = getMenuOffset() + positionOffset + "px";
  }
}

setMenuOffset();

window.addEventListener("scroll", setMenuOffset);

if (body.id == "home") {
  function animateMenu(direction) {
    anime({
      targets: "#filterAboutMenu",
      height: [0, "calc(100% - " + getMenuOffset() + "px)"],
      duration: 800,
      easing: "easeInOutExpo",
      direction: direction,
    });
  }

  function menuToggle() {
    if (menuEl.getAttribute("data-menu") == "visible") {
      // menu is visible, so hide it and enable scrolling
      body.style.overflow = "auto";
      animateMenu("reverse");
      menuEl.setAttribute("data-menu", "hidden");
    } else {
      // menu is hidden, so show it and disable scrolling
      body.style.overflow = "hidden";
      animateMenu("normal");
      menuEl.setAttribute("data-menu", "visible");
    }
  }

  menuBtn.addEventListener("click", function (event) {
    event.preventDefault();
    menuToggle();
  });
}
