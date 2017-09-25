function changeUI() {
  var dateType = parseInt(document.getElementById("dateCreationType").value);
  var panelSingleField = document.getElementById("panelSingleField");
  var panelYMD = document.getElementById("panelYMD");
  var panelHMS = document.getElementById("panelHMS");
  var panelResult = document.getElementById("panelResult");
  var button = document.getElementById("createDate");

  switch(dateType)  {
    case 1:
      panelSingleField.style.display = "none";
      panelYMD.style.display = "none";
      panelHMS.style.display = "none";
      button.onclick = showCurrentDateData;
      break;
    case 2:
      panelSingleField.style.display = "block";
      panelYMD.style.display = "none";
      panelHMS.style.display = "none";
      button.onclick = showMillisecondsData;
      break;
    case 3:
      panelSingleField.style.display = "block";
      panelYMD.style.display = "none";
      panelHMS.style.display = "none";
      button.onclick = showFromTextData;
      break;
    case 4:
      panelSingleField.style.display = "none";
      panelYMD.style.display = "block";
      panelHMS.style.display = "none";
      button.onclick = showFromYMD;
      break;
    case 5:
      panelSingleField.style.display = "none";
      panelYMD.style.display = "block";
      panelHMS.style.display = "block";
      button.onclick = showFromYMDHMSM;
      break;
  }

  panelResult.innerHTML = "";
}

function showCurrentDateData() {
  var date = new Date();

  panelResult.innerHTML = createDateInfoHTML(date);
}

function showMillisecondsData() {
  var milliseconds = parseInt(document.getElementById("singleField").value);
  var date = new Date(milliseconds);

  panelResult.innerHTML = createDateInfoHTML(date);
}

function showFromTextData() {
  var text = document.getElementById("singleField").value;
  var date = new Date(text);

  panelResult.innerHTML = createDateInfoHTML(date);
}

function showFromYMD() {
  var year = document.getElementById("year").value;
  var month = document.getElementById("month").value;
  var day = document.getElementById("day").value;

  var date = new Date(year, month, day);

  panelResult.innerHTML = createDateInfoHTML(date);
}

function showFromYMDHMSM() {
  var year = parseInt(document.getElementById("year").value);
  var month = parseInt(document.getElementById("month").value);
  var day = parseInt(document.getElementById("day").value);
  var hours = parseInt(document.getElementById("hours").value);
  var minutes = parseInt(document.getElementById("minutes").value);
  var seconds = parseInt(document.getElementById("seconds").value);
  var milliseconds = parseInt(document.getElementById("milliseconds").value);

  var date = new Date(year, month, day,
    hours, minutes, seconds, milliseconds);

  panelResult.innerHTML = createDateInfoHTML(date);
}

function createDateInfoHTML(date) {
  var dateInfo = "";

  dateInfo += "Day of week:" + date.getDay();
  dateInfo += ", Day of month:" + date.getDate();
  dateInfo += ", Month:" + date.getMonth();
  dateInfo += ", Year (4 digits):" + date.getFullYear();
  dateInfo += ", Hours:" + date.getHours();
  dateInfo += ", Minutes:" + date.getMinutes();
  dateInfo += ", Seconds:" + date.getSeconds();
  dateInfo += ", Milliseconds:" + date.getMilliseconds();

  dateInfo += "<br><br>";

  dateInfo += "toDateString(): " + date.toDateString();
  dateInfo += ", toGMTString(): " + date.toGMTString();
  dateInfo += ", toISOString(): " + date.toISOString();
  dateInfo += ", toJSON(): " + date.toJSON();
  dateInfo += ", toLocaleDateString('es'): " + date.toLocaleDateString("es");
  dateInfo += ", toLocaleTimeString('es'): " + date.toLocaleTimeString("es");
  dateInfo += ", toString(): " + date.toString();
  dateInfo += ", toUTCString(): " + date.toUTCString();
  dateInfo += ", toTimeString(): " + date.toTimeString();

  return dateInfo;
}
