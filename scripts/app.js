
/* references **********************************/

const amountOfDivsInput = document.querySelector('#input-div');
const requestSubmit = document.querySelector('#request-div');
const gridContainer = document.querySelector(".grid-container");

/* functions  **********************************/

function getDivAmount() {
  const requestAmt = amountOfDivsInput.value;
  const gridDivs = requestAmt * 2;
  return gridDivs;
}

function createGridDivs() {
  const totalDivsAmt = getDivAmount()
  

  for (let i = 0; i < 20; i++) {
      const div = document.createElement("div");
      // div.textContent = "test";
      div.classList.add("grid-item");
      gridContainer.appendChild(div);
  }
}

/* event listeners *****************************/

requestSubmit.addEventListener('click', createGridDivs);

/* app *****************************************/
createGridDivs();
