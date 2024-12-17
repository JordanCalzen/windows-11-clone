const modeSwitch = document.querySelector(".modeSwitch");

const search = document.querySelector(".search");

if (localStorage.getItem("theme") === "dark") {
	document.body.classList.add("changeMode");
}

// Toggle theme and save preference
modeSwitch.addEventListener("click", (e) => {
	e.preventDefault();
	document.body.classList.toggle("changeMode");

	// Save theme state
	if (document.body.classList.contains("changeMode")) {
		localStorage.setItem("theme", "dark");
		modeSwitch.innerHTML = `<img src="./images/night.png" alt="" />`;
		search.innerHTML = `<img src="./images/search-light.svg" alt="" />`;
	} else {
		localStorage.setItem("theme", "light");
		modeSwitch.innerHTML = `<img src="./images/day.png" alt="" />`;
		search.innerHTML = `<img src="./images/search-dark.svg" alt="" />`;
	}
});
