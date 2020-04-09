function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
  }

const requestURL = 'https://ehalterman.github.io/salmon-river-adventures/riverguides.json';

fetch(requestURL)
  .then(function (response){
    return response.json();
  })
  .then(function (jsonObject) {
    const guides = jsonObject['riverguides'];
    for (let i = 0; i < guides.length; i++) {
      let riverguide = document.createElement('div');
      let name = document.createElement('h3')
      let 
    }
  })
