var randomArray = [];

function generateRandomArray(length) {
  var randomArray = [];

  for(var i = 0; i < length; i++)
    randomArray.push(Math.round(Math.random() * 100));

  return randomArray;
}

onmessage = function(event) {
  var arrayLength = event.data;
  postMessage("Generating random array...");
  var randomArray = generateRandomArray(arrayLength);
  postMessage("Random array generated.");
  postMessage({array: randomArray});
  postMessage("Sorting array...");
  randomArray.sort();
  postMessage("Array sort finished.");
  postMessage({array: randomArray});
};
