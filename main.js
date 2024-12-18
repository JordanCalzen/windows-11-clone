const modeSwitch = document.querySelector(".modeSwitch");

const search = document.querySelector(".search");

const windows = document.querySelector(".windows");

const windowIcon = document.querySelector(".windowIcon");

const login = document.querySelector(".login");

const yourPassword = document.querySelector("#yourPassword");

const enterBtn = document.querySelector(".enter");

const spinner = document.querySelector(".spin-ner");

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

windowIcon.addEventListener("click", () => {
	windows.classList.toggle("showWindow");
});

enterBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const password = yourPassword.value;
	if (password === "12345") {
		login.style.display = "none";
		setTimeout(function () {
			spinner.style.display = "none";
		}, 3000);
	} else {
		alert("Enter correct password");
	}
});
