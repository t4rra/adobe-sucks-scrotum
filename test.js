// thanks https://photics.com/hero-1-help-my-map-does-not-work/

function showElements(elements) {
  for (var s = 0; s < elements.length; s++) {
    elements[s].setAttribute("data-visible", "yep");
  }
}
function hideElements(elements) {
  for (var h = 0; h < elements.length; h++) {
    elements[h].setAttribute("data-visible", "nope");
  }
}

// function to log all elements
function logAll(beans) {
  for (var i = 0; i < beans.length; i++) {
    console.log(beans[i]);
  }
}

function selectAll(elements) {
  for (var z = 0; z < elements.length; z++) {
    return elements[z];
  }
}

function update() {
  var selectedMap = document.querySelector("input[name='mainFilter']:checked").id;
  var selectedMapClass = document.querySelector("input[name='mainFilter']:checked").value;

  var selectedToggle = document.querySelector("input[name='secondaryfilter']:checked").id;
  var selectedToggleClass = document.querySelector("input[name='secondaryfilter']:checked").value;

  console.log(selectedToggle);
  console.log(selectedToggleClass);
  hideElements(document.getElementsByClassName("toggleEl"));

  if (document.getElementById(selectedMap).checked) {
	  if (document.getElementById(selectedToggle).checked) {
		showElements(document.querySelectorAll("." + selectedMapClass + "." + selectedToggleClass));
	}
  } else {
    hideElements(document.getElementsByClassName(selectedMapClass));
  }
}

document.addEventListener("input", update);
