const amountOfDivsInput = document.querySelector('#input-div');
const requestInput = document.querySelector('#request-div');
const gridContainer = document.querySelector(".grid-container");

function getDivAmount() {
  const requestAmt = amountOfDivsInput.value;
  const gridDivs = requestAmt * 2;
  return gridDivs;
}

function createGridDivs() {
  for (let i = 0; i < 20; i++) {
      const div = document.createElement("div");
      // div.textContent = "test";
      div.classList.add("grid-item");
      gridContainer.appendChild(div);
  }
}

createGridDivs();
