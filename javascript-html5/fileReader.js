var readers = [];

function readFiles() {
  var fileInput = document.getElementById("file");
  var content = document.getElementById("result");
  var progress = document.getElementById("progress");

  content.innerHTML = "";

  if (fileInput.files.length > 0) {
    progress.style = "display: inline;";

    readers = [];

    for (var i = 0; i < fileInput.files.length; i++) {
      readers[i] = {
        reader: new FileReader(),
        index: i
      };

      readers[i].reader.onprogress = function(event) {
        if (event.lengthComputable) {
          progress.max = event.total;
          progress.value = event.loaded;
        }
      }

      readers[i].reader.onload = function(event) {
        content.innerHTML += event.target.result.replace(new RegExp("\n", "g"), "<br/>");
      }

      readers[i].reader.onerror = function(event) {
        alert("Error reading file");
      }

      readers[i].reader.onloadend = function(event) {
        if (readers.length > 0)
          var nextReader = readers.shift();
          nextReader.reader.readAsText(fileInput.files[nextReader.index]);
      }
    }

    var nextReader = readers.shift();
    nextReader.reader.readAsText(fileInput.files[nextReader.index], "UTF-8");
  }
}
