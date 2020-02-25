var t, s, windChill;
s = parseInt(document.getElementById("windspeed").textContent);
t = parseInt(document.getElementById("temperature").textContent);
if (t <= 50 && s > 3){
windChill = Math.round(35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16)));
}
else {
windChill = "N/A"
}
document.getElementById("chill").innerHTML = windChill;