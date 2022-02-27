// thanks https://www.w3schools.com/howto/howto_js_filter_elements.asp
filterSelection("all")
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("filterEl");
	if (c == "all") c = "";
	for (i = 0; i < x.length; i++) {
	  RemoveClass(x[i], "show");
	  if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
	}
  }

function AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
	  if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
	}
  }
  
  function RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
	  while (arr1.indexOf(arr2[i]) > -1) {
		arr1.splice(arr1.indexOf(arr2[i]), 1);     
	  }
	}
	element.className = arr1.join(" ");
  }
  
  // Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filterBTN");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function update() {
	var maps = document.querySelectorAll(".🗺"); // Don't forget the dot, very important 😊

	// for (var i = 0; i < maps.length; i++) {
	//      maps[i].style.opacity = 0;
	// }

	maps.forEach((e) => { e.style.opacity = 0; });

	var selectedMap = document.querySelector("input[name='🌎']:checked").value;
	document.getElementById(selectedMap).style.opacity = 1;

	document.getElementById("Flags").setAttribute("data-visible", "nope");
	document.getElementById("Flags-Oceans").setAttribute("data-visible", "nope");

	if (document.getElementById("button-free").checked) {
		if (selectedMap == "Oceans") {
			document.getElementById("Flags-Oceans").setAttribute("data-visible", "yup");
		} else {
			document.getElementById("Flags").setAttribute("data-visible", "yup");
		}
	}

}

document.addEventListener("input", update);
