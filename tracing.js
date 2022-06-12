function startListening() {
    function onSuccess(position){
      /* Updates distance away from target */
      const currLat = position.coords.latitude;
      const currLng = position.coords.longitude;

      const dist = getDistance(currLat, targetLat, currLng, targetLng);

      document.getElementById("distance-away").innerHTML = dist + " km away";

      if(dist <= radius.value){
        navigator.geolocation.clearWatch(listener);
          Alert();
      }
    }

    function onFail(error){
      /* Alerts error on error */
      alert(error.message);
    }
    
    navigator.geolocation.watchPosition(onSuccess, onFail);
}

function getDistance(currLat, targetLat, currLng, targetLng){
  	currLat = currLat * Math.PI / 180;
    targetLat = targetLat * Math.PI / 180;
    currLng = currLng * Math.PI / 180;
    targetLng = targetLng * Math.PI / 180;

    let Dlat = targetLat - currLat;
    let Dlng = targetLng - currLng;

    let a = Math.sin(Dlat/2)**2 + Math.cos(currLat) * Math.cos(targetLat) * Math.sin(Dlng)**2;

    let c = 2 * Math.asin(Math.sqrt(a));

    let r = 6371;

    return (c * r);
  }
  
function Alert() {
    if(vibrate){
        navigator.vibrate(1500);
    }
    var audio = new Audio(audio.value);
    audio.play();
}

submit.onsubmit = "startListening()";
