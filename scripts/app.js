const gridContainer = document.querySelector(".grid-container");

function createGridDivs() {
  for (let i = 0; i < 16; i++) {
      const div = document.createElement("div");
      div.textContent = "test";
      gridContainer.appendChild(div);
  }
}

createGridDivs();
