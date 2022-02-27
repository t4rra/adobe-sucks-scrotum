// thanks https://photics.com/hero-1-help-my-map-does-not-work/

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

  console.log("selected filter ", selectedfilter);
  console.log("selected filter class", selectedfilterClass);
  console.log("selected app ", selectedapp);
  console.log("selected app class", selectedappClass);
  console.log("----------------------------------");

  hideElements(document.getElementsByClassName("filterEl"));

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
}

document.addEventListener("input", update);
