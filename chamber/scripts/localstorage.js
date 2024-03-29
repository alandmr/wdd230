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
			lastestVisitDisplay.textContent = `You last visited ${Math.round(nTimes)} days ago`;
			localStorage.setItem("lastestVisit",today);
		}				
	}
  }