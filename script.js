const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5c0aff7ad7msh0f2cf69bfed63afp1f6ce8jsn4583f1afc175',
		'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
	}
};


const weather = document.getElementById('weather-output')
const cityName = document.getElementById('city-name')
const weatherType = document.getElementById('weather-type')
const temp = document.getElementById('temp')
const minTemp = document.getElementById('min-temp')
const maxTemp = document.getElementById('max-temp')

const getWeather = (city) => {
  fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=imperial`, options)
	.then(response => response.json())
	.then(response => showWeather(response))
	.catch(err => console.error(err));
}

const showWeather = (response) => {
    cityName.innerHTML = `<h4>${response.name}</h4>`
    weatherType.innerHTML = `<h1>${response.weather[0].main}</h1>`
    temp.innerHTML = `<span>${response.main.temp}</span>`
    minTemp.innerHTML = `<span>${response.main.temp_min}</span>`
    maxTemp.innerHTML = `<span>${response.main.temp_max}</span>`
}

const searchCity = () => {
  const city = document.getElementById('city-input').value
  return getWeather(city)
}
