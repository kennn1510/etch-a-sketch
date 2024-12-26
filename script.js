const gridContainer = document.querySelector("#grid-container");

for (let i = 0; i < 16 * 16; i++) {
  const gridItem = document.createElement("div");
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  gridItem.style.flex = 1;
  gridItem.style.backgroundColor = "#" + randomColor;

  gridItem.classList.add("grid-item");

  gridContainer.appendChild(gridItem);
}
