const apiKey = "dd5ad92278cdadaf34634152f3ec33dd";
const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";

let tempaF = 0;
let tempa = 0;
let wspeed = 0;
let windChill = 0;
let icon = "";

let windChillValue = document.querySelector("#windchill");
let tempValue = document.querySelector("#temperature");
let weatherD = document.querySelector("#details");
let windSpeed = document.querySelector("#windspeed");
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
    wspeed = data.wind.speed*2.237;
    icon = "https://openweathermap.org/img/wn/"+data.weather[0].icon+".png"; 
    
	  iconWeather.setAttribute("src",icon);
    tempValue.textContent = `${Math.round(tempaF)} °F`;
    weatherD.textContent = `${capitalizeFirstLetter(data.weather[0].description)}`;
    windSpeed.textContent = `Wind Speed: ${wspeed.toFixed(2)} mph`;
   
    
    if (tempaF <= 50 && wspeed > 3){
        windChill = (35.74+0.6215*tempaF)-(35.75*wspeed^0.16)+(0.4275*tempaF*wspeed^0.16);
        windChillValue.textContent = `Wind Chill: ${windChill}`;
    }else{
        windChillValue.textContent = `Wind Chill: 0`;        
    }
    
  })
  .catch(error => console.error(error))
  
