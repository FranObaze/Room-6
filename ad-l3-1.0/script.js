function getRandomColor() {
  const colors = ["green", "blue", "red"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function changeColor(event) {
  event.target.style.color = getRandomColor();
}

document.querySelectorAll("h5").forEach((h5) => {
  h5.addEventListener("click", changeColor);
});
