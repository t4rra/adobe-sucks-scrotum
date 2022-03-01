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
  var selectedapp = document.querySelector(
    "input[name='mainFilter']:checked"
  ).id;
  var selectedappClass = document.querySelector(
    "input[name='mainFilter']:checked"
  ).value;

  var selectedfilter = document.querySelector(
    "input[name='secondaryfilter']:checked"
  ).id;
  var selectedfilterClass = document.querySelector(
    "input[name='secondaryfilter']:checked"
  ).value;

  hideElements(document.getElementsByClassName("filterEl"));

  // shows elements filtered by app and price
  if (document.getElementById(selectedapp).checked) {
    if (document.getElementById(selectedfilter).checked) {
      showElements(
        document.querySelectorAll(
          "." + selectedappClass + "." + selectedfilterClass
        )
      );
    }
  } else {
    hideElements(document.getElementsByClassName(selectedappClass));
  }

  // checks if any element's data-visible attribute is visible
  if (document.querySelectorAll("[data-visible='visible']").length > 0) {
    console.log("there is a result");
    document.getElementById("noResult").classList.add("hidden");
  } else {
    console.log("there is no results");
    document.getElementById("noResult").classList.remove("hidden");
  }
}

// runs the function every time an input is detected
document.addEventListener("input", update);

// About popup
var modal = document.getElementById("about");

var btn = document.getElementById("openAbout");

var closebtn = document.getElementById("closeAbout");

function openModal() {
  modal.style.opacity = "1";
  modal.style.pointerEvents = "all";
  document.querySelector("body").style.overflow = "hidden";
  document.querySelector("main").style.zIndex = "-100";
}

function closeModal() {
  modal.style.opacity = "0";
  modal.style.pointerEvents = "none";
  document.querySelector("body").style.overflow = "auto";
  document.querySelector("main").style.zIndex = "0";
}

btn.onclick = function () {
  openModal();
};

closebtn.onclick = function () {
  closeModal();
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.opacity = "0";
    modal.style.pointerEvents = "none";
    setTimeout();
  document.querySelector("body").style.overflow = "auto";

    document.querySelector("main").style.zIndex = "0";
  }
};
