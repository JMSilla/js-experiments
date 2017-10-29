function loadData() {
  var url = "https://api.github.com/emojis";
  var request = new XMLHttpRequest();
  var list = document.getElementById("list");

  request.open("GET", url, true);
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      if (request.getResponseHeader("Content-Type").indexOf("application/json") === 0) {
        var returnedObject = JSON.parse(request.responseText);

        list.innerHTML = "";

        for (emojiName in returnedObject) {
          var emojiUrl = returnedObject[emojiName];

          var listElement = document.createElement("li");
          listElement.innerHTML = emojiName + ": <img src='" + emojiUrl + "'/>"

          list.appendChild(listElement);
        }

      }
    }
  }

  request.send();
}
