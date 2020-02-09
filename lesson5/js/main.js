function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
function banner() {
    var date = new Date();
    if (date.getDay = 6){
        document.getElementsByClassName("pancakes").style.display = "block";
    }
    else {
        document.getElementsByClassName("pancakes").style.display = "none";
    }

}


const options1 = {day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric'};
document.getElementById('lastmod').textContent = new Date(document.lastModified).toLocaleDateString('en-US', options1);

