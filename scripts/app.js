/* import */
import ModeManager from "../service/ModeManager.js"

/* class instantiation */
const modeMang = new ModeManager()

/* references **********************************/
const gridItemStylesheet = document.querySelector('link[href="/styles/gridItem.css"]').sheet;
const rowAmtInput = document.querySelector('#range-items');
const rangeValueSpan = document.querySelector('#range-value');
const gridContainer = document.querySelector(".grid-container");

const colorModeBtn = document.getElementById('color-btn');
const rainBowModeBtn = document.getElementById('rainbow-btn');
const eraserModeBtn = document.getElementById('eraser-btn');


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
  const gridItemRules = gridItemStylesheet.cssRules || gridItemStylesheet.rules;
  const flexBasisVal = 100 / gridObj.rowAmt;

  for (let i = 0; i < gridItemRules.length; i++) {
    if (gridItemRules[i].selectorText === ".grid-item") {
      gridItemRules[i].style.setProperty("flex-basis", `${flexBasisVal}%`)  
    }
  }
}

function createGrid() {
  rangeValueSpan.textContent = `${rowAmtInput.value} x ${rowAmtInput.value}`;

  const gridObj = getGridItemAmount();
  const gridItem = createGridItem();

  setGridItemFlexbasis(gridObj);

  for (let i = 0; i < gridObj.totalGridItems; i++) {
    const item = gridItem.cloneNode(true);
    gridContainer.appendChild(item)
  }
}

function setMode(button) {
  for (const key in modeMang) {
    if (key === 'colorMode') {
      modeMang[key] = true;
    } else {
      modeMang[key] = false;
    }
  }
}

/* main event listeners *****************************/

rowAmtInput.addEventListener('input', () => {
  gridContainer.innerHTML = "";
  createGrid();
});

gridContainer.addEventListener('mouseover', (event) => {
  if (event.target.className === 'grid-item') {
    event.target.style.backgroundColor = 'black'
  }
});

colorModeBtn.addEventListener('click', () => {
  
  console.log(modeMang);
});

rainBowModeBtn.addEventListener('click', () => {
  modeMang.colorMode = false;
  modeMang.rainbowMode = true;
  modeMang.eraserMode = false;
  console.log(modeMang);
});

eraserModeBtn.addEventListener('click', () => {
  modeMang.colorMode = false;
  modeMang.rainbowMode = false;
  modeMang.eraserMode = true;
  console.log(modeMang);
});
/* app *****************************************/
createGrid()

