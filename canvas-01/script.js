const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');
const penColor = document.querySelector('input[name="penColor"]');
const penWidth = document.querySelector('input[name="penWidth"]');
const saver = document.querySelector("#saver");


ctx.strokeStyle = "#000000";
ctx.lineJoin = "round";
ctx.lineCap ="round";
ctx.lineWidth = 5;

let pen = {
    x:0,
    y:0,
    down:false
}

saver.addEventListener('click',saveFile);
canvas.addEventListener('mousedown',penDown);
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',noDown);
canvas.addEventListener('mouseout',noDown);


function noDown(){
    console.log('out');
    pen.down = false;
}



function draw(){
  console.log('move');
}

function penDown(e){
   console.log('down');
   [pen.x,pen.y]=[e.offsetX,e.offsetY];
   console.log(pen);
}

function saveFile(){

}