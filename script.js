const fishes = document.querySelectorAll(".fish");

let mouseX = 0;
let mouseY = 0;

let posX = [];
let posY = [];

fishes.forEach((f,i)=>{
posX[i]=0;
posY[i]=0;
});

document.addEventListener("mousemove",(e)=>{
mouseX = e.clientX;
mouseY = e.clientY;
createBubble(mouseX,mouseY);
});

function animate(){
let x = mouseX;
let y = mouseY;

fishes.forEach((fish,i)=>{
posX[i] += (x - posX[i]) * 0.05;
posY[i] += (y - posY[i]) * 0.05;

fish.style.left = posX[i] + "px";
fish.style.top = posY[i] + "px";

let dx = x - posX[i];
let dy = y - posY[i];
let angle = Math.atan2(dy,dx) * 180 / Math.PI;

fish.style.transform = "rotate("+angle+"deg)";

x = posX[i];
y = posY[i];
});

requestAnimationFrame(animate);
}
animate();

function createBubble(x,y){
let bubble = document.createElement("div");
bubble.className="bubble";
bubble.style.left = x+"px";
bubble.style.top = y+"px";
document.body.appendChild(bubble);

setTimeout(()=>{ bubble.remove(); },2000);
}