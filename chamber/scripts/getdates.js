let currDate = new Date();
document.querySelector("#updated").textContent = "Last modification: "+currDate.toLocaleString();
document.querySelector("#year").textContent = "© "+currDate.getFullYear()+" .:|:. Aland D. Muñoz .:|:. Barcelona - Venezuela";

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";		
		body.style.background = "#000";		
		main.style.color = "#fff";		
		modeButton.textContent = "🔆";
	} else {
		body.style.background = "#E7ECEF";
		main.style.background = "#E7ECEF";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});

