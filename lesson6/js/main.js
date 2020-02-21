function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
function banner() {
    let date = new Date().getDay();
    if (date == 6){
        document.getElementsByClassName("pancakes").style.display = "block";
    }
}


const options1 = {day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric'};
document.getElementById('lastmod').textContent = new Date(document.lastModified).toLocaleDateString('en-US', options1);

