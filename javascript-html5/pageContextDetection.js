function setUserAgent() {
  document.getElementById("userAgent").innerHTML = getUserAgentText();
}

function getUserAgentText() {
  return "User agent: " + navigator.userAgent;
}

function initVisibility() {
  refreshVisibility();
  document.addEventListener("visibilitychage", refreshVisibility);
}

function refreshVisibility() {
  document.getElementById("visibility").innerHTML = getVisibilityText();
}

function getVisibilityText() {
  var visibilityText = "Visibility state: " + document.visibilityState;
  visibilityText += "<br/>Hidden?: " + document.hidden;

  return visibilityText;
}

function initConnectionState() {
  refreshConnectionState();
  window.addEventListener("online", refreshConnectionState);
  window.addEventListener("offline", refreshConnectionState);
}

function refreshConnectionState() {
  document.getElementById("connection").innerHTML = getConnectionText();
}

function getConnectionText() {
  return "Online?: " + navigator.onLine;
}
