
/* references **********************************/

const amountOfDivsInput = document.querySelector('#input-div');
const requestSubmit = document.querySelector('#request-div');
const gridContainer = document.querySelector(".grid-container");

/* functions  **********************************/

function getDivAmount() {
  const rowAmt = amountOfDivsInput.value;
  const totalDivsAmt = rowAmt * rowAmt;
  return {rowAmt, totalDivsAmt};
}

function createGridDivs() {
  const divObj = getDivAmount()
  console.log(divObj);

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
