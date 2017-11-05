var video;

function init() {
  video = document.getElementById("video");

  var playPauseButton = getPlayPauseButton();
  playPauseButton.innerHTML = "Play";
  playPauseButton.disabled = true;

  var volumeControl = getVolumeControl();
  volumeControl.value = video.volume * volumeControl.max;

  var playbackRateControl = getPlaybackRateControl();
  playbackRateControl.value = video.playbackRate * playbackRateControl.max;
}

function getPlayPauseButton() {
  return document.getElementById("playPause");
}

function getVolumeControl() {
  return document.getElementById("volume");
}

function getPlaybackRateControl() {
  return document.getElementById("playbackRate");
}

function loadedMetaData(event) {
  getCurrentTimeSpan().innerHTML = "0";
  document.getElementById("duration").innerHTML = Math.round(video.duration);
}

function getCurrentTimeSpan() {
  return document.getElementById("currentTime")
}

function loadedData(event) {
  getPlayPauseButton().disabled = false;
}

function timeUpdate(event) {
  getCurrentTimeSpan().innerHTML = Math.round(video.currentTime);

  if (video.currentTime >= video.duration) {
    getPlayPauseButton().innerHTML = "Play";
    getCurrentTimeSpan().innerHTML = "0";
  }
}

function changePlayPause() {
  var button = getPlayPauseButton();

  if (video.paused) {
    video.play();
    button.innerHTML = "Pause";
  }
  else {
    video.pause();
    button.innerHTML = "Play";
  }
}

function changeVolume() {
  var volumeControl = getVolumeControl();
  video.volume = volumeControl.value / volumeControl.max;
}

function changePlaybackRate() {
  var playbackRateControl = getPlaybackRateControl();
  video.playbackRate = playbackRateControl.value / playbackRateControl.max;
}
