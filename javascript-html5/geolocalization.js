function currentPosition() {
  navigator.geolocation.getCurrentPosition(
    function(position) {
      document.getElementById("current").innerHTML = "";
      showCoorsInDiv(position.coords, "current");
    },
    function(error) {
      document.getElementById("current").innerHTML = "";
      showErrorInDiv(error, "current");
    },
    {
      enableHighAccuracy: true
    }
  );
}

function showCoorsInDiv(coords, divId) {
  var div = document.getElementById(divId);
  var content = div.innerHTML + "<br/>";

  content += "Latitude: " + coords.latitude;
  content += "<br/>Longitude: " + coords.longitude;
  content += "<br/>Accuracy (m): " + coords.accuracy;

  if (coords.altitude) {
    content += "<br/>Altitude (m): " + coords.altitude;
    content += "<br/>Altitude accuracy (m): " + coords.altitudeAccuracy;
  }

  if (coords.heading)
    content += "<br/>Heading (degrees): " + coords.heading;

  if (coords.speed)
    content += "<br/>Speed (m/s): " + coords.speed;

  div.innerHTML = content;
}

function showErrorInDiv(error, divId) {
  var div = document.getElementById(divId);
  var content = "Error: ";

  switch(error.code) {
    case error.PERMISSION_DENIED:
      content += "Permission denied";
      break;
    case error.POSITION_UNAVAILABLE:
      content += "Position unavailable";
      break;
    case error.TIMEOUT:
      content += "Timeout";
      break;
  }

  content += ". " + error.message + ".";

  div.innerHTML = content;
}

var watchId = null;

function watchPosition() {
  if (watchId === null) {
    watchId = navigator.geolocation.watchPosition(
      function(position) {
        document.getElementById("watch").innerHTML = "";
        showCoorsInDiv(position.coords, "watch");
      },
      function(error) {
        document.getElementById("watch").innerHTML = "";
        showErrorInDiv(error, "watch");
      },
      {
        enableHighAccuracy: true
      }
    );

    document.getElementById("watchPosition").innerHTML = "Stop watch";
  }
  else {
    navigator.geolocation.clearWatch(watchId);
    document.getElementById("watchPosition").innerHTML = "Watch position";
    watchId = null;
  }
}
