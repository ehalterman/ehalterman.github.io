const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        let towndata = document.createElement('section');
        let h2 = document.createElement('h2');
        let motto = document.createElement('h3');
        let  yearfounded= document.createElement('p');
        let currentpopulation = document.createElement('p');
        let averagerain = document.createElement('p');
        let image = document.createElement('img');
        if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            yearfounded.textContent = "Year Founded: " + towns[i].yearFounded;
            currentpopulation.textContent = "Population: " + towns[i].currentPopulation;
            averagerain.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
            image.setAttribute('src',"images/" + towns[i].photo);
            towndata.appendChild(h2);
            towndata.appendChild(motto);
            towndata.appendChild(yearfounded);
            towndata.appendChild(currentpopulation);
            towndata.appendChild(averagerain);
            towndata.appendChild(image);
            //image.setAttribute('alt', towns[i].name);
        }

        document.querySelector('div.towndata').appendChild(towndata);
    }
});

function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

const options1 = {day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric'};
document.getElementById('lastmod').textContent = new Date(document.lastModified).toLocaleDateString('en-US', options1);
