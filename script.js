var coords = document.getElementById("coords");
var radius = document.getElementById("radius");
var vibration = document.getElementById("toggle");
var ball = document.getElementById("ball");
var audio = document.getElementById("audio");
var submit = document.getElementById("submit");

coords.placeholder = "Paste      <LATITUDE>,<LONGITUDE>      here"
const targetLat = coords.value.split(",")[0];
const targetLng = coords.value.split(",")[1];


radius.min = 200;
radius.max = 2000;
radius.value = 1000;
radius.step = 100;
radius.addEventListener("change", ()=>{
    document.getElementById("radiusLabel").textContent  = radius.value/1000 + " km";
});

radius.addEventListener("touchmove", ()=>{
    document.getElementById("radiusLabel").textContent  = radius.value/1000 + " km";
});

vibration.textContent = "OFF";
var vibrate = false;

vibration.addEventListener('pointerdown', ()=>{
    if(!vibrate){
        vibrate = true;
        vibration.style.color = "#26ff00";
        vibration.textContent = "ON";
    }
    else{
        vibrate = false;
        vibration.style.color = "#ff0a00";
        vibration.textContent = "OFF";
    }
});

audio.value = "";
audio.placeholder = "Paste link";

submit.addEventListener("click", ()=>{
    document.getElementById("window").innerHTML = "<center id=\"distance-away\">Your Location has been set up</center>";
});