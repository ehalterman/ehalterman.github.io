function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
  }

const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=83549,us&units=imperial&APPID=8789dd92c7cf955322e78e6d6bb50d55"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const currentTemp = document.querySelector('temperature');
        document.getElementById('temperature').textContent = jsObject.main.temp_max;

        document.getElementById('humidity').textContent = jsObject.main.humidity;

        document.getElementById('windspeed').textContent = jsObject.wind.speed;

        var t, s, windChill;
        s = parseInt(document.getElementById("windspeed").textContent);
        t = parseInt(document.getElementById("temperature").textContent);
        if (t <= 50 && s > 3){
        windChill = Math.round(35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16)));
        }
        else {
        windChill = t;
        }
        document.getElementById("windchill").innerHTML = windChill;
    })