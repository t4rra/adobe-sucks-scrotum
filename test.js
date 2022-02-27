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
		beans[i].setAttribute("data-visible", "yep");
		console.log(beans[i]);
	}
}

function update() {
	var selectedMap = document.querySelector("input[name='mainFilter']:checked").value;
	var secondSelectedMap = document.querySelectorAll("input[name='secondaryFilter']:checked").value;
	console.log(selectedMap);
	// console.log(secondSelectedMap);
	logAll(document.querySelectorAll("input[name='secondaryFilter']:checked").value);

	hideElements(document.getElementsByClassName("Physical"));
	hideElements(document.getElementsByClassName("Political"));
	hideElements(document.getElementsByClassName("Oceans"));
	hideElements(document.getElementsByClassName("Flags"));

	if (document.getElementById("button-all").checked) {
		showElements(document.getElementsByClassName("toggleEL"));
	} else {
		hideElements(document.getElementsByClassName("toggleEL"));
	}

	if (document.getElementById("button-physical").checked) {
		showElements(document.getElementsByClassName("Physical"));
	} else {
		hideElements(document.getElementsByClassName("Physical"));
	}

	if (document.getElementById("button-political").checked) {
		showElements(document.getElementsByClassName("Political"));
	} else {
		hideElements(document.getElementsByClassName("Political"));
	}

	if (document.getElementById("button-oceans").checked) {
		showElements(document.getElementsByClassName("Oceans"));
	} else {
		hideElements(document.getElementsByClassName("Oceans"));
	}

	if (document.getElementById("button-flags").checked) {
		showElements(document.getElementsByClassName("Flags"));
	} else {
		hideElements(document.getElementsByClassName("Flags"));
	}

}

document.addEventListener("input", update);
