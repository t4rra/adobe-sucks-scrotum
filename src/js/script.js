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
    console.log("there is a result");
    document.getElementById("noResult").classList.add("hidden");
  } else {
    console.log("there is no results");
    document.getElementById("noResult").classList.remove("hidden");
  }
  console.log(selectedApp);
}

document.addEventListener("input", update);

menuEl = document.querySelector("#filterAboutMenu");
body = document.querySelector("body");


function menuToggle() {
  if (menuEl.getAttribute("data-menu") == "visible") {
    menuEl.setAttribute("data-menu", "hidden");
    body.style.overflow = "auto";
  } else {
    menuEl.setAttribute("data-menu", "visible");
    body.style.overflow = "hidden";
  }
}

menuBtn = document.querySelector("#aboutLink");

menuBtn.onclick = function () {
  menuToggle();
};
