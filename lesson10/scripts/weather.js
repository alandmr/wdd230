// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = "dd5ad92278cdadaf34634152f3ec33dd";
const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
const lat = 49.74900777829702;
const lon = 6.639116652518985;

function capitalizeFirstLetter(string) {    
    let new_string = string.split(" ");
    return new_string[0].charAt(0).toUpperCase() + new_string[0].slice(1)+ " " +new_string[1].charAt(0).toUpperCase() + new_string[1].slice(1);
  }

async function apiFetch() {
    try {
      const response = await fetch(`${apiEndpoint}?appid=${apiKey}&units=imperial&lat=${lat}&lon=${lon}`);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
         displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = capitalizeFirstLetter(data.weather[0].description);
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('atl', desc);
    captionDesc.textContent = `${desc}`;
  }
  