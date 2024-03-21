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

  // Block of code for page number visits
  const visitsDisplay = document.querySelector(".visits");
  if (visitsDisplay !== null){
	let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
  
	if (numVisits !== 0) {
		visitsDisplay.textContent = numVisits;
	} else {
		visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
	}
	
	numVisits++;
	localStorage.setItem("numVisits-ls", numVisits);

  }
  
  let lastestVisitDisplay = document.querySelector(".lastestVisit");
  let today = Date.now();
  let lastVisit = localStorage.getItem("lastestVisit");

  if (lastestVisitDisplay !== null){
	if (lastVisit == null){
		localStorage.setItem("lastestVisit",today);
		lastestVisitDisplay.textContent = `Welcome! Let us know if you have any questions`;
	}else{
		let getLastVisit = parseInt(lastVisit);
		let nTimes = (today-getLastVisit)/86400000;
		if (nTimes < 1){
			lastestVisitDisplay.textContent = `Back so soon! Awesome!`;
			localStorage.setItem("lastestVisit",today);
		}else if(nTimes == 1){
			lastestVisitDisplay.textContent = `You last visited ${nTimes} day ago`;
			localStorage.setItem("lastestVisit",today);
		}else{
			lastestVisitDisplay.textContent = `You last visited ${nTimes} days ago`;
			localStorage.setItem("lastestVisit",today);
		}				
	}
  }

  

