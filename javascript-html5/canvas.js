function getCanvasContext() {
  return elementWithId("canvas").getContext("2d");
}

function elementWithId(id) {
  return document.getElementById(id);
}

function cleanCanvas() {
  var canvas = elementWithId("canvas");
  canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
}

function fillRect() {
  var context = getCanvasContext();
  var x = elementWithId("rectX").value;
  var y = elementWithId("rectY").value;
  var width = elementWithId("rectWidth").value;
  var height = elementWithId("rectHeight").value;

  if (x && y && width && height) {
    context.fillStyle = elementWithId("fillStyleColor").value;
    context.fillRect(x, y, width, height);
  }
}

function strokeRect() {
  var context = getCanvasContext();
  var x = elementWithId("rectX").value;
  var y = elementWithId("rectY").value;
  var width = elementWithId("rectWidth").value;
  var height = elementWithId("rectHeight").value;

  if (x && y && width && height) {
    context.strokeStyle = elementWithId("strokeStyleColor").value;
    context.strokeRect(x, y, width, height);
  }
}

function clearRect() {
  var context = getCanvasContext();
  var x = elementWithId("rectX").value;
  var y = elementWithId("rectY").value;
  var width = elementWithId("rectWidth").value;
  var height = elementWithId("rectHeight").value;

  if (x && y && width && height) {
    context.clearRect(x, y, width, height);
  }
}

function fillArc() {
  var context = getCanvasContext();
  var x = elementWithId("arcX").value;
  var y = elementWithId("arcY").value;
  var radius = elementWithId("arcRadius").value;
  var startAngle = elementWithId("arcStartAngle").value;
  var endAngle = elementWithId("arcEndAngle").value;
  var counterClockWise = elementWithId("arcCCWise").checked;

  if (x && y && radius && startAngle && endAngle) {
    context.fillStyle = elementWithId("fillStyleColor").value;
    context.beginPath();
    context.arc(x, y, radius, degreesToRadians(startAngle),
      degreesToRadians(endAngle), counterClockWise);
    context.fill();
  }
}

function strokeArc() {
  var context = getCanvasContext();
  var x = elementWithId("arcX").value;
  var y = elementWithId("arcY").value;
  var radius = elementWithId("arcRadius").value;
  var startAngle = elementWithId("arcStartAngle").value;
  var endAngle = elementWithId("arcEndAngle").value;
  var counterClockWise = elementWithId("arcCCWise").checked;

  if (x && y && radius && startAngle && endAngle) {
    context.strokeStyle = elementWithId("strokeStyleColor").value;
    context.beginPath();
    context.arc(x, y, radius, degreesToRadians(startAngle),
      degreesToRadians(endAngle), counterClockWise);
    context.stroke();
  }
}

function degreesToRadians(degrees) {
  return degrees * 2 * Math.PI / 360;
}

function rotate() {
  var context = getCanvasContext();
  var angle = elementWithId("rotateAngle").value;

  if(angle)
    context.rotate(degreesToRadians(angle));
}

function translate() {
  var context = getCanvasContext();
  var tx = elementWithId("translateX").value;
  var ty = elementWithId("translateY").value;

  if(tx && ty)
    context.translate(tx, ty);
}

function scale() {
  var context = getCanvasContext();
  var sx = elementWithId("scaleX").value;
  var sy = elementWithId("scaleY").value;

  if(sx && sy)
    context.scale(sx, sy);
}

function beginPath() {
  getCanvasContext().beginPath();
}

function move() {
  var context = getCanvasContext();
  var x = elementWithId("pathX").value;
  var y = elementWithId("pathY").value;

  if (x && y)
    context.moveTo(x, y);
}

function line() {
  var context = getCanvasContext();
  var x = elementWithId("pathX").value;
  var y = elementWithId("pathY").value;

  if (x && y)
    context.lineTo(x, y);
}

function closeAndFill() {
  var context = getCanvasContext();
  context.closePath();
  context.fill();
}

function closeAndStroke() {
  var context = getCanvasContext();
  context.closePath();
  context.stroke();
}
