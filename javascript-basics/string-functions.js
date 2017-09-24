function calculateCharAt() {
  var string = document.getElementById("charat").value;
  var position = document.getElementById("position").value;
  var charatResult = document.getElementById("charatResult");

  charatResult.innerHTML = "\"" + string + "\".charAt(" + position + ") = '"
    + string.charAt(position) + "'";
  charatResult.innerHTML += ", \"" + string + "\".charCodeAt(" + position + ") = "
      + string.charCodeAt(position);
}

function calculateConcat() {
  var string1 = document.getElementById("concat1").value;
  var string2 = document.getElementById("concat2").value;
  var concatResult = document.getElementById("concatResult");

  concatResult.innerHTML = "\"" + string1 + "\".concat(\"" + string2 + "\") = "
    + "\"" + string1.concat(string2) + "\"";
}

function calculateIndexOf() {
  var string = document.getElementById("indexof").value;
  var searchString = document.getElementById("searchstring").value;
  var index = document.getElementById("index").value;
  var indexOfResult = document.getElementById("indexOfResult");

  var stringResult;

  if (index)
    stringResult = string.indexOf(searchString, index);
  else
    stringResult = string.indexOf(searchString);

  indexOfResult.innerHTML = "\"" + string + "\".indexOf(\"" + searchString + "\"";

  if (index)
    indexOfResult.innerHTML += ", " + index;

  indexOfResult.innerHTML += ") = " + stringResult;

  if (index)
    stringResult = string.lastIndexOf(searchString, index);
  else
    stringResult = string.lastIndexOf(searchString);

  indexOfResult.innerHTML += ", \"" + string + "\".lastIndexOf(\"" + searchString + "\"";

  if (index)
    indexOfResult.innerHTML += ", " + index;

  indexOfResult.innerHTML += ") = " + stringResult;
}
