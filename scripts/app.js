const gridContainer = document.querySelector(".grid-container");

function createGridDivs() {
  for (let i = 0; i < 256; i++) {
      const div = document.createElement("div");
      // div.textContent = "test";
      div.classList.add("grid-item");
      gridContainer.appendChild(div);
  }
}

createGridDivs();
