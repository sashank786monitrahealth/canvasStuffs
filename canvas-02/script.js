var canvas = document.getElementById("myCan");
var ctx = canvas.getContext("2d");

// short hand to create rect
ctx.fillStyle="yellow";
ctx.strokeStyle = "lime";
ctx.lineWidth ="10";
ctx.strokeRect(100,100,100,100);
ctx.fillRect(100,100,100,100);
ctx.lineWidth ="5";
ctx.strokeRect(100,250,100,100);

// long form to create rect
ctx.rect(300,100,100,100);
ctx.fillStyle="blue";
ctx.fill();
ctx.strokeStyle = "lime";
ctx.lineWidth = "5";
ctx.stroke();

// clearRect is used to clear pixels
//ctx.clearRect(0,50,640,480);