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

ctx.beginPath();
for(var x=0;x<10;x++){
   ctx.moveTo(50 + (x*50),250);
   ctx.lineTo(70+ (x*50),250);

}

ctx.stroke();


