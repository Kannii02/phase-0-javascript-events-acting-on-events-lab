// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    // The game field is 400px wide, and the dodger is 40px wide
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  