
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

function createDiv() {
  const divItem = document.createElement("div");
  divItem.classList.add("grid-item");
  return divItem;
}

function createGridDivs() {
  const divObj = getDivAmount()

  for (let i = 0; i < divObj.totalDivsAmt; i++) {

    
      gridContainer.appendChild(div);
  }
}

/* event listeners *****************************/

requestSubmit.addEventListener('click', createGridDivs);

/* app *****************************************/
createGridDivs();
