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

function calculateSubstr() {
  var string = document.getElementById("substr").value;
  var substrstart = document.getElementById("substrstart").value;
  var length = document.getElementById("substrlength").value;
  var substrResult = document.getElementById("substrResult");

  var stringResult;

  if (length)
    stringResult = string.substr(substrstart, length);
  else
    stringResult = string.substr(substrstart);

  substrResult.innerHTML = "\"" + string + "\".substr(" + substrstart;

  if (length)
    substrResult.innerHTML += ", " + length;

  substrResult.innerHTML += ") = \"" + stringResult + "\"";
}

function calculateLowerUpper() {
  var string = document.getElementById("lowerupper").value;
  var lowerUpperResult = document.getElementById("lowerupperResult");

  lowerUpperResult.innerHTML = "\"" + string + "\".toLowerCase() = \""
    + string.toLowerCase() + "\"";
  lowerUpperResult.innerHTML += ", \"" + string + "\".toUpperCase() = \""
    + string.toUpperCase() + "\"";
}

function calculateSplit() {
  var string = document.getElementById("split").value;
  var separator = document.getElementById("splitseparator").value;
  var limit = parseInt(document.getElementById("splitlimit").value);
  var splitResult = document.getElementById("splitResult");

  var stringResult;

  if (separator && limit)
    stringResult = string.split(separator, limit);
  else if (separator)
    stringResult = string.split(separator)
  else if (limit)
    stringResult = string.split(limit);
  else
    stringResult = string.split();

  splitResult.innerHTML = "\"" + string + "\".split(";

  if (separator)
    splitResult.innerHTML += "\"" + separator + "\"";

  if (separator && limit)
    splitResult.innerHTML += ", ";

  if (limit)
    splitResult.innerHTML += limit;

  splitResult.innerHTML += ") = [" + stringResult.toString() + "]";
}
