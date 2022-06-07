
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
  } else {
    document.getElementById("noResult").classList.remove("hidden");
  }
  console.log(selectedApp);
}

document.addEventListener("input", update);

// about menu 
var menuEl = document.querySelector("#filterAboutMenu");
var menuBtn = document.querySelector("#aboutLink");

function getMenuOffset() {
  offsetBoundingClient = menuBtn.getBoundingClientRect();
  offset = offsetBoundingClient.bottom;
  return offset;
}

function setMenuOffset() {
  menuEl.style.top = getMenuOffset() + 2 + "px";
}

setMenuOffset();

window.addEventListener("scroll", setMenuOffset);

function animateMenu(direction) {
  anime({
    targets: "#filterAboutMenu",
    height: [0, "calc(100% - " + getMenuOffset() + "px)"],
    direction: direction,
  })
}

function menuToggle() {
  if (menuEl.getAttribute("data-menu") == "visible") {
    animateMenu("reverse");
    menuEl.setAttribute("data-menu", "hidden");
  } else {
    animateMenu("normal");
    menuEl.setAttribute("data-menu", "visible");
  }
}

menuBtn.addEventListener("click", menuToggle);

// about menu open
// menuEl = document.querySelector("#filterAboutMenu");
// body = document.querySelector("body");


// // get bottom offset of element (pixels from bottom of menu btn to top of page)
// function getBottomOffset(el) {
//   var viewportOffset = el.getBoundingClientRect();
//   var bottom = viewportOffset.bottom;
//   console.log("bottom: " + bottom);
//   return bottom;
// }

// // sets the menu to the offset of the menu btn
// function setMenuOffset() {
//   menuEl.style.top = getBottomOffset(document.querySelector("#links")) + "px";
//   return getBottomOffset(document.querySelector("#links") + "px");
// }

// setMenuOffset();

// // get offset of menu on scroll
// window.addEventListener("scroll", function () {
//   console.log("window scrolled");
//   setMenuOffset();
// });

// function openMenu() {
//   anime({
//     targets: menuEl,
//     height: "calc(100% - " + menuOffset + "px)",
//     duration: 800,
//     easing: "cubic-bezier( 0.63, 0, 0.23, 1 )",
//   });
// }

// function closeMenu() {
//   anime({
//     targets: menuEl,
//     height: "0",
//     duration: 800,
//     easing: "cubic-bezier( 0.63, 0, 0.23, 1 )",
//   });
// }

// function menuToggle() {
//   if (menuEl.getAttribute("data-menu") == "visible") {
//     // hide element
//     menuEl.setAttribute("data-menu", "hidden");
//     closeMenu();
//     body.style.overflow = "auto";
//   } else {
//     //show element
//     openMenu();
//     menuEl.setAttribute("data-menu", "visible");
//     body.style.overflow = "hidden";
//   }
// }

// menuBtn = document.querySelector("#aboutLink");

// menuBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   menuToggle();
// });

// document.querySelector("[data-menu='visible']").style.height = "calc(100% -" + menuOffset + "px)";
