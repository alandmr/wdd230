let currDate = new Date();
document.querySelector("#updated").textContent = "Last modification: "+currDate.toLocaleString();
document.querySelector("#year").textContent = "© "+currDate.getFullYear()+" .:|:. Aland D. Muñoz .:|:. Barcelona - Venezuela";

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

// Block code to get actual temperature

const apiKey = "dd5ad92278cdadaf34634152f3ec33dd";
const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";

let tempaF = 0;
let tempa = 0;
let icon = "";

let tempValue = document.querySelector("#temperature");
let weatherD = document.querySelector("#details");
let iconWeather = document.querySelector(".iconWeather");

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Fetching temperature data
fetch(`${apiEndpoint}?appid=${apiKey}&q=${encodeURIComponent('Barcelona, VE')}&units=metric`)
  .then(response => response.json())
  .then(data => {    
    
    tempa = data.main.temp;
    tempaF = (tempa * 9/5)+32;   
	icon = "https://openweathermap.org/img/wn/"+data.weather[0].icon+".png"; 

    
	iconWeather.setAttribute("src",icon);
	tempValue.textContent = `${Math.round(tempa)} °C`;
    weatherD.textContent = `${capitalizeFirstLetter(data.weather[0].description)}`;    
  })
  .catch(error => console.error(error))