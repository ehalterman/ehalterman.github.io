const aURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=8789dd92c7cf955322e78e6d6bb50d55"
fetch(aURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

        for (let i=0; i<forecast.length; i++) {
            document.getElementById(`temp${i+1}`).textContent=forecast[i].main.temp_max;
            const imagesrc = `https://openweathermap.org/img/wn/${forecast[i].weather[0].icon}.png`;
            const desc = forecast[i].weather[0].description;
            document.getElementById(`icon${i+1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${i+1}`).setAttribute('alt', desc);
        }
    
    })
    
let day = new Date();
let weekd = day.getDay();
let week = new Array(7);
week[0] = "Sun";
week[1] = "Mon";
week[2] = "Tues";
week[3] = "Wed";
week[4] = "Thur";
week[5] = "Fri";
week[6] = "Sat";

document.getElementById("day1").textContent=week[(weekd+1)];
document.getElementById("day2").textContent=week[(weekd+2)];
document.getElementById("day3").textContent=week[(weekd+3)];
document.getElementById("day4").textContent=week[(weekd+4)];
document.getElementById("day5").textContent=week[(weekd+5)];