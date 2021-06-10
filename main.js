canvas= document.getElementById("canvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle ="grey";
ctx.lineWidth= 1;
ctx.rect(200, 70, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth= 5;
ctx.arc(400,150,40,0, 360);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth= 5;
ctx.arc(500,150,40,0, 360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.linewidth= 3;
ctx.arc(300,150,40,0, 360);
ctx.stroke(); 


ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.linewidth= 3;
ctx.arc(350,190,40,0, 360);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="green";
ctx.linewidth= 3;
ctx.arc(450,190,40,0, 360);
ctx.stroke();