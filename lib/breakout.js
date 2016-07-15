document.addEventListener("DOMContentLoaded", function() {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 600;
  document.body.appendChild(canvas);

  setInterval(drawBall(ctx, canvas), 1);
});

var x = canvas.width/2;
var y = canvas.height-30;


function drawBall(ctx, canvas) {

  let dx = 2;
  let dy = -2;

  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI*2, false);
  ctx.strokeStyle = "green";
  ctx.stroke();
  ctx.closePath();

  x += dx;
  y += dy;
}
