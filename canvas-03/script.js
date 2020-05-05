var canvas = document.getElementById("myCan");
var ctx = canvas.getContext("2d");

ctx.font = "bold italic 48px Arial";
ctx.fillStyle = "lime";
ctx.textAlign ="center";
ctx.fillText("first text",150,50);
//

ctx.strokeStyle ="dodgerblue"
ctx.textAlign ="center";
ctx.strokeText("second Text",150,100);

