function pancakeBreakfast() {
    alert("Saturday Pancakes");
}

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}



const options1 = {day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric'};
document.getElementById('lastmod').textContent = new Date(document.lastModified).toLocaleDateString('en-US', options1);

