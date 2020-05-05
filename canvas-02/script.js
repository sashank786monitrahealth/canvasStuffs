var canvas = document.getElementById("myCan");
var ctx = canvas.getContext("2d");

ctx.save();

// short hand to create rect
ctx.fillStyle="yellow";
ctx.strokeStyle = "lime";
ctx.lineWidth ="10";
ctx.strokeRect(100,100,100,100);
ctx.fillRect(100,100,100,100);
ctx.lineWidth ="5";
ctx.strokeRect(100,250,100,100);

// long form to create rect
ctx.beginPath();
ctx.rect(300,100,100,100);
ctx.shadowColor = "black";
ctx.shadowOffsetX = -20;
ctx.shadowOffsetY = 20;
ctx.shadowBlur=30;



ctx.fillStyle="blue";
ctx.fill();
ctx.strokeStyle = "lime";
ctx.lineWidth = "5";
ctx.stroke();

ctx.closePath();



// clearRect is used to clear pixels
ctx.clearRect(0,50,640,480);

ctx.restore();

ctx.beginPath();
ctx.moveTo(200,50);
ctx.lineTo(300,75);
ctx.lineTo(300,175);
ctx.moveTo(200,50);
ctx.lineTo(300,175);
ctx.stroke();
ctx.closePath();



//////////////////////////////



ctx.beginPath();
ctx.moveTo(50,50)
ctx.quadraticCurveTo(50,100,300,50);

ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.moveTo(50,350)
ctx.bezierCurveTo(50,100,300,100,300,350);

ctx.stroke();
ctx.closePath();



ctx.beginPath();
ctx.arc(320,240,100,(3*Math.PI/4),2*Math.PI);
ctx.fill();
ctx.stroke(); 
ctx.closePath();