var array = [];

function showArray() {
  var pArray = document.getElementById("array");

  pArray.innerHTML = "[" + array.toString() + "] - length: " + array.length;
}

function arrayPush() {
  var result = array.push(document.getElementById("value").value);
  updateResult(result);
  showArray();
}

function updateResult(newResult) {
  document.getElementById("result").innerHTML = "Result: " + newResult;
}

function arrayPop() {
  var result = array.pop();
  updateResult(result);
  showArray();
}

function arrayReverse() {
  var result = array.reverse();
  updateResult(result);
  showArray();
}

function arrayShift() {
  var result = array.shift();
  updateResult(result);
  showArray();
}

function arraySort() {
  var result = array.sort();
  updateResult(result);
  showArray();
}

function arraySortInt() {
  var result = array.sort(function(a, b) {
    var intA = parseInt(a);
    var intB = parseInt(b);

    if (intA < intB)
      return -1;

    if (intA > intB)
      return 1;

    return 0;
  });

  updateResult(result);
  showArray();
}

function arrayUnshift() {
  var result = array.unshift(document.getElementById("value").value);
  updateResult(result);
  showArray();
}

function arrayJoin() {
  var result = array.join(document.getElementById("value").value);
  updateResult(result);
  showArray();
}

function arraySplice() {
  var startValue = parseInt(document.getElementById("start").value);
  var lengthValue = parseInt(document.getElementById("length").value);
  var newValue = document.getElementById("newElement").value;

  var result = array.splice(startValue, lengthValue, newValue);
  updateResult(result);
  showArray();
}

function arrayConcat() {
  var result = array.concat(document.getElementById("concatValue").value.split(","));
  updateResult(result);
  showArray();
}

function arraySlice() {
  var sliceStart = parseInt(document.getElementById("sliceStart").value);
  var sliceEnd = parseInt(document.getElementById("sliceEnd").value);

  var result;

  if (sliceStart && sliceEnd)
    result = array.slice(sliceStart, sliceEnd);
  else if (sliceStart)
    result = array.slice(sliceStart);
  else if (!sliceEnd)
    result = array.slice();

  updateResult(result);
  showArray();
}
