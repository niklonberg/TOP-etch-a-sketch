
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

function setFlex(divObj) {
  const styleSheet = document.querySelector('link[href="/styles/gridItem.css"]').sheet;
  console.log(styleSheet)

  const cssRules = styleSheet.rules;
  console.log(rules);

  for (let i = 0; i < cssRules.length; i++) {
  
  }
}

function createGridDivs() {
  const divObj = getDivAmount();
  const divItem = createDiv();

  setFlex(divObj);

  for (let i = 0; i < divObj.totalDivsAmt; i++) {

    
      gridContainer.appendChild(divItem);
  }
}

/* event listeners *****************************/

requestSubmit.addEventListener('click', createGridDivs);

/* app *****************************************/
/* createGridDivs(); */
