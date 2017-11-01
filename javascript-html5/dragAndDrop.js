function dropImage(event) {
  event.preventDefault();
  event.stopPropagation();

  var result = document.getElementById("result");
  var file = event.dataTransfer.files[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    var image = document.createElement("img");
    image.src = reader.result;
    result.appendChild(image);
    document.getElementById("drop").style.backgroundColor = "grey";
  };

  reader.readAsDataURL(file);
}

function dragEnter(event) {
  event.preventDefault();
  event.stopPropagation();
}

function dragOver(event) {
  event.preventDefault();
  event.stopPropagation();
  document.getElementById("drop").style.backgroundColor = "green";
}

function dragLeave(event) {
  event.preventDefault();
  event.stopPropagation();
  document.getElementById("drop").style.backgroundColor = "grey";
}
