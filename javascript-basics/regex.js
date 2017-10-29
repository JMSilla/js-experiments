function checkMatch() {
  var regexText = document.getElementById("regex").value;
  var value = document.getElementById("value").value;
  var resultElement = document.getElementById("result");

  var regex = new RegExp(regexText, "ig");
  var result = regex.exec(value);

  resultElement.innerHTML = "Match: " + result[0] + "<br/>";
  resultElement.innerHTML += "Groups: " + result.slice(1) + "<br/>";
  resultElement.innerHTML += "Match index: " + result.index + "<br/>";
  resultElement.innerHTML += "Original string: " + result.input;
}
