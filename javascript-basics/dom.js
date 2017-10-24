function addElement() {
  var list = document.getElementById("list");
  var element = document.forms.mainForm.elements["element"];
  var newElement = document.createElement("li");
  var text = document.createTextNode(element.value);

  newElement.appendChild(text);
  list.appendChild(newElement);
}

function removeLastElement() {
  var list = document.getElementById("list");
  var lastNode = list.childNodes[list.childNodes.length - 1];

  list.removeChild(lastNode);
}
