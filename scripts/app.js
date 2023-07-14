
/* references **********************************/

const rowAmtInput = document.querySelector('#input-div');
const requestSubmit = document.querySelector('#request-div');
const gridContainer = document.querySelector(".grid-container");

/* functions  **********************************/

function getGridItemAmount() {
  const rowAmt = rowAmtInput.value;
  const totalGridItems = rowAmt * rowAmt;
  return {rowAmt, totalGridItems};
}

function createGridItem() {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  return gridItem;
}

function setGridItemFlexbasis(gridObj) {
  const styleSheet = document.querySelector('link[href="/styles/gridItem.css"]').sheet;
  console.log(styleSheet)

  const cssRules = styleSheet.rules;
  console.log(cssRules);

  for (let i = 0; i < cssRules.length; i++) {
  
  }
}

function createGridDivs() {
  const gridObj = getGridItemAmount();
  const gridItem = createGridItem();

  setGridItemFlexbasis(gridObj);

  for (let i = 0; i < gridObj.totalGridItems; i++) {
    const item = gridItem.cloneNode(true);
    gridContainer.appendChild(item)
  }
}

/* event listeners *****************************/

requestSubmit.addEventListener('click', createGridDivs);

/* app *****************************************/
/* createGridDivs(); */
