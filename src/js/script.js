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
  // if (document.querySelectorAll("[data-visible='visible']").length > 0) {
  //   console.log("there is a result");
  //   document.getElementById("noResult").classList.add("hidden");
  // } else {
  //   console.log("there is no results");
  //   document.getElementById("noResult").classList.remove("hidden");
  // }
  console.log(selectedApp);
}

// runs the function every time an input is detected
document.addEventListener("input", update);

// About popup
//   var modal = document.getElementById("about");

//   var btn = document.getElementById("openAbout");

//   var closebtn = document.getElementById("closeAbout");

//   function openModal() {
// 	modal.style.opacity = "1";
// 	modal.style.pointerEvents = "all";
// 	setTimeout(() => {
// 	  document.querySelector("body").style.overflow = "hidden";
// 	}, 400);
//   }

//   function closeModal() {
// 	modal.style.opacity = "0";
// 	modal.style.pointerEvents = "none";
// 	document.querySelector("body").style.overflow = "auto";
// 	setTimeout(() => {
// 	  document.querySelector("main").style.zIndex = "0";
// 	}, 400);
//   }

//   btn.onclick = function () {
// 	openModal();
// 	document.querySelector("main").style.zIndex = "-100";
//   };

//   closebtn.onclick = function () {
// 	closeModal();
//   };

//   window.onclick = function (event) {
// 	if (event.target == modal) {
// 	  closeModal();
// 	}
//   };
