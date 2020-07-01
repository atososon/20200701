import "./styles.css";
const canvas = document.querySelector("#draw-area");
const context = canvas.getContext("2d");

canvas.addEventListener("mousemove", event => {
  draw(event.layerX, event.layerY);
});
canvas.addEventListener("touchmove", event => {
  draw(event.layerX, event.layerY);
});

canvas.addEventListener("mousedown", () => {
  context.beginPath();
  isDrag = true;
});
canvas.addEventListener("mouseup", () => {
  context.closePath();
  isDrag = false;
});
canvas.addEventListener("touchstart", () => {
  context.beginPath();
  isDrag = true;
});
canvas.addEventListener("touchend", () => {
  context.closePath();
  isDrag = false;
});

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

let isDrag = false;
context.strokeStyle = "rgb(0, 0, 0)";
const redButton = document.querySelector("#red-button");
redButton.addEventListener("click", () => {
  context.strokeStyle = "rgb(255, 0, 0)";
});
const blackButton = document.querySelector("#black-button");
blackButton.addEventListener("click", () => {
  context.strokeStyle = "rgb(0, 0, 0)";
});
const blueButton = document.querySelector("#blue-button");
blueButton.addEventListener("click", () => {
  context.strokeStyle = "rgb(0, 0, 255)";
});
function draw(x, y) {
  if (!isDrag) {
    return;
  }

  context.lineWidth = 5;
  context.lineTo(x, y);
  context.stroke();
}
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
