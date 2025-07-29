const ball = document.getElementById("ball");
let x = 100;
let y = 100;
let vx = 8;
let vy = 8;

function updatePosition() {
  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;
  const ballWidth = ball.offsetWidth;
  const ballHeight = ball.offsetHeight;

  x += vx;
  y += vy;

  if (x + ballWidth >= containerWidth || x <= 0) vx *= -1;
  if (y + ballHeight >= containerHeight || y <= 0) vy *= -1;

  ball.style.left = x + "px";
  ball.style.top = y + "px";

  requestAnimationFrame(updatePosition);
}

window.onload = () => {
  ball.style.left = x + "px";
  ball.style.top = y + "px";
  updatePosition();
};

window.onresize = () => {
  const maxX = window.innerWidth - ball.offsetWidth;
  const maxY = window.innerHeight - ball.offsetHeight;
  if (x > maxX) x = maxX;
  if (y > maxY) y = maxY;
};
