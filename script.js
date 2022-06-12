var coords = document.getElementById("coords");
var radius = document.getElementById("radius");
var vibration = document.getElementById("toggle");
var ball = document.getElementById("ball");
var audio = document.getElementById("audio");
var submit = document.getElementById("submit");


// Placeholder to coordinate box
coords.placeholder = "Paste      <LATITUDE>,<LONGITUDE>      here";


// Range of radius 
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


// Vibration controls
vibration.textContent = "OFF";
var vibrate = false;

vibration.addEventListener('pointerdown', ()=>{
    if(vibrate){
        // if ON, => OFF
        vibrate = false;
        vibration.style.color = "#ff0a00";
        vibration.textContent = "OFF";
    }
    else{
        // if OFF, => ON
        vibrate = true;
        vibration.style.color = "#26ff00";
        vibration.textContent = "ON";
    }alert(vibrate);
});


// audio link
audio.value = "";
audio.placeholder = "Paste link";
