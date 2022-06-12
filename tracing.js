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
  
  
function startListening() {
    
    function onSuccess() {
        alert("Success");
    }
    
    function onFail() {
        alert("fail");
    }

    navigator.geolocation.watchPosition(onSuccess,  onFail);
}

alert(range.value);
alert(coords.value);

submit.setAttribute("onsubmit", "startListening()");
