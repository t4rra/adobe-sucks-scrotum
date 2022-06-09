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
if (document.querySelector("body").id == "home") {
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
}
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
      height: [0, "calc(100vh - " + getMenuOffset() + "px)"],
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

// form link generation
if (body.id == "submit") {
  function getCheckedBoxes(chkboxName) {
    var checkboxes = document.getElementsByName(chkboxName);
    var checkboxesChecked = [];
    // loop over them all
    for (var i = 0; i < checkboxes.length; i++) {
      // And stick the checked ones onto an array...
      if (checkboxes[i].checked) {
        checkboxesChecked.push(checkboxes[i].value);
      }
    }
    // Return the array if it is non-empty, or null
    return checkboxesChecked.join("  %0D%0A - ");
  }

  function setVars() {
  window.title = document.querySelector("[name='altApp']").value;
  window.replaces = "adobeApps";
  window.pricing = "pricing";
  window.description = document.querySelector("[name='description']").value;
  window.link = document.querySelector("[name='link']").value;

  window.submitContainer = document.querySelector("#submitContainer");
  window.submitBtn = document.querySelector("#submitContainer [type='submit']");
  }
  setVars();
  function validateForm() {
    setVars();
    
    if (
      !(title == "" ||
      description == "" ||
      link == "" ||
      getCheckedBoxes(pricing) == "" ||
      getCheckedBoxes(replaces) == "")
    ) {
      submitContainer.style.cursor = "pointer";
      submitBtn.style.pointerEvents = "auto";
      submitBtn.value = "submit";
      console.log("valid");
      return true;
    } else {
      submitContainer.style.cursor = "not-allowed !important";
      submitBtn.style.pointerEvents = "none";
      submitBtn.value = "fill all fields";
      console.log("invalid");
      return false;
    }
  }
  validateForm();

  document.querySelector("form").addEventListener("input", function () {
    validateForm();
  });

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    // replace all break lines with space
    const formatted_description = description.replace(/\n/g, " ");

    const issueLink =
      "https://github.com/eaaasun/adobe-sucks-scrotum/issues/new?assignees=&labels=&template=appsuggest.yaml&title=Alternative: " +
      title +
      "&additional-comments=---%0D%0Atitle: " +
      title +
      "%0D%0Adescription: " +
      formatted_description +
      "%0D%0Apricing:%0D%0A - " +
      getCheckedBoxes(pricing) +
      "%0D%0Areplaces:%0D%0A - " +
      getCheckedBoxes(replaces) +
      "%0D%0Alink: " +
      link +
      "%0D%0A---%0D%0A";

    if (validateForm() == true) {
      window.open(issueLink, "_blank");
    } else {
      console.log("cannot submit");
    }
  });
}
