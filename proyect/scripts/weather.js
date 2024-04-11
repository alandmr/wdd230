const apiKey = "dd5ad92278cdadaf34634152f3ec33dd";
const apiEndpoint = "https://api.openweathermap.org/data/2.5/forecast";

let tempa = 0;
let icon = "";
let humidity = 0;

let icon2 = "";
let icon3 = "";
let icon4 = "";

let tempa2 = 0;
let tempa3 = 0;
let tempa4 = 0;

let humudutyValue = document.querySelector("#humidity");
let tempValue = document.querySelector("#temperature");
let weatherD = document.querySelector("#details");
let iconWeather = document.querySelector(".iconWeather");
let city = document.querySelector(".city");

let tempValue2 = document.querySelector("#temperature2");
let weatherD2 = document.querySelector("#details2");
let iconWeather2 = document.querySelector(".iconWeather2");
let date2 = document.querySelector("#date2");

let tempValue3 = document.querySelector("#temperature3");
let weatherD3 = document.querySelector("#details3");
let iconWeather3 = document.querySelector(".iconWeather3");
let date3 = document.querySelector("#date3");

let tempValue4 = document.querySelector("#temperature4");
let weatherD4 = document.querySelector("#details4");
let iconWeather4 = document.querySelector(".iconWeather4");
let date4 = document.querySelector("#date4");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Fetching temperature data
fetch(`${apiEndpoint}?appid=${apiKey}&q=${encodeURIComponent('Barcelona, VE')}&units=imperial`)
  .then(response => response.json())
  .then(data => {    
    
    console.log(data);
    
    tempa = data.list[0].main.temp;        
    icon = "https://openweathermap.org/img/wn/"+data.list[0].weather[0].icon+".png"; 

    tempa2 = data.list[5].main.temp;
    tempaF2 = (tempa2 * 9/5)+32;        
    icon2 = "https://openweathermap.org/img/wn/"+data.list[4].weather[0].icon+".png"; 

    tempa3 = data.list[13].main.temp;
    tempaF3 = (tempa3 * 9/5)+32;        
    icon3 = "https://openweathermap.org/img/wn/"+data.list[12].weather[0].icon+".png";

    tempa4 = data.list[21].main.temp;
    tempaF4 = (tempa4 * 9/5)+32;        
    icon4 = "https://openweathermap.org/img/wn/"+data.list[20].weather[0].icon+".png";
    
	city.textContent = `${data.city.name}, ${data.city.country}`;
    iconWeather.setAttribute("src",icon);
    tempValue.textContent = `${Math.round(tempa)} °F`;
    humudutyValue.textContent = `Humidity: ${data.list[0].main.humidity}%`;
    weatherD.textContent = `${capitalizeFirstLetter(data.list[0].weather[0].description)}`;    

    iconWeather2.setAttribute("src",icon2);
    tempValue2.textContent = `${Math.round(tempa2)} °F`;
    weatherD2.textContent = `${capitalizeFirstLetter(data.list[5].weather[0].description)}`;
    let dt1 = new Date(data.list[5].dt * 1000);    
    date2.textContent = `${dt1.toLocaleDateString('es-ES', { month: 'short', day: 'numeric' })}`;

    iconWeather3.setAttribute("src",icon3);
    tempValue3.textContent = `${Math.round(tempa3)} °F`;
    weatherD3.textContent = `${capitalizeFirstLetter(data.list[13].weather[0].description)}`;
    let dt2 = new Date(data.list[13].dt * 1000);    
    date3.textContent = `${dt2.toLocaleDateString('es-ES', { month: 'short', day: 'numeric' })}`;

    iconWeather4.setAttribute("src",icon4);
    tempValue4.textContent = `${Math.round(tempa4)} °F`;
    weatherD4.textContent = `${capitalizeFirstLetter(data.list[21].weather[0].description)}`;
    let dt3 = new Date(data.list[21].dt * 1000);    
    date4.textContent = `${dt3.toLocaleDateString('es-ES', { month: 'short', day: 'numeric' })}`;
    
  })
  .catch(error => console.error(error))
  
