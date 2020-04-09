function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
  }

const requestURL = 'https://ehalterman.github.io/salmon-river-adventures/riverguides.json';

fetch(requestURL)
  .then(function (response){
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const guides = jsonObject['riverguides'];
    for (let i = 0; i < guides.length; i++ ) {
      let riverguide = document.createElement('section');
      let name = document.createElement('h3')
      let image = document.createElement('img');
      let certification = document.createElement('p');
      let experience = document.createElement('p');
      let email = document.createElement('p');
      let biography = document.createElement('p');
      if (guides[i]) {
        name.textContent = guides[i].name;
        image.setAttribute('src', "images/" + guides[i].img);
        certification.textContent = "Certification Level: " + guides[i].certlvl;
        experience.textContent = "Experience: " + guides[i].experience;
        email.textContent = "Email: " + guides[i].email;
        biography.textContent = "Biography: " + guides[i].bio;
        riverguide.appendChild(name);
        riverguide.appendChild(image);
        riverguide.appendChild(certification);
        riverguide.appendChild(experience);
        riverguide.appendChild(email);
        riverguide.appendChild(biography);
        image.setAttribute('alt', guides[i].name);
      }

    document.querySelector('div.riverguide').appendChild(riverguide);
  }
  });
