const gridContainer = document.querySelector("#grid-container");

function createGrid(size) {
  gridContainer.style.width = size;
  gridContainer.style.height = size;
  for (let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement("div");

    gridItem.style.flex = 1;
    gridItem.style.backgroundColor = "#" + getRandomColor();

    gridItem.classList.add("grid-item");

    gridContainer.appendChild(gridItem);
  }
}
createGrid();
function deleteGrid() {
  const gridItem = document.querySelectorAll(".grid-item");
  gridItem.forEach((item) => {
    item.remove();
  });
}
function getRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}
function interactWithGrid() {
  const gridItem = document.querySelectorAll(".grid-item");
  gridItem.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "black";
    });
  });
}
interactWithGrid();
const sizeBtn = document.querySelector("#size-btn");
sizeBtn.addEventListener("click", () => {
  const userRequestedSize = prompt(
    "What would you like to set the size of the grid to?"
  );
  deleteGrid();
  createGrid(userRequestedSize);
  interactWithGrid();
});
