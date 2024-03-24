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
	tempValue.textContent = `${Math.round(tempaF)} °F`;
    weatherD.textContent = `${capitalizeFirstLetter(data.weather[0].description)}`;    
  })
  .catch(error => console.error(error))