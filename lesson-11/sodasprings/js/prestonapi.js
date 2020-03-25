const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=8789dd92c7cf955322e78e6d6bb50d55"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const currentTemp = document.querySelector('temperature');
        document.getElementById('temperature').textContent = jsObject.main.temp_max;

        document.getElementById('current').textContent = jsObject.weather[0].description;

        document.getElementById('humidity').textContent = jsObject.main.humidity;

        document.getElementById('windspeed').textContent = jsObject.wind.speed;
    })