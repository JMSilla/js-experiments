var worker = new Worker("generateAndSort.js");

worker.onmessage = function(event) {
  if (event.data.array)
    writeOutputLine(JSON.stringify(event.data.array));
  else
    writeOutputLine(event.data);
};

function startWorker() {
  worker.postMessage(document.getElementById("arrayLength").value);
}

function writeOutputLine(output) {
  document.getElementById("output").innerHTML += output + "<br/>";
}
