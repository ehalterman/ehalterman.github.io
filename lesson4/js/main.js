
const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("responsive");
}

const options1 = {day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric'};
document.getElementById('lastmod').textContent = new Date(document.lastModified).toLocaleDateString('en-US', options1);
