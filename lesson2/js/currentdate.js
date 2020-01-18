const options = {year:'numeric'};
document.getElementById('curyear').textContent = new Date().toLocaleDateString('en-US', options);

const options1 = {day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric'};
document.getElementById('lastmod').textContent = new Date(document.lastModified).toLocaleDateString('en-US', options1);