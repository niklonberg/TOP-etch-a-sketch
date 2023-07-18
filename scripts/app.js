/* import */
import ModeManager from "../service/ModeManager.js";
import ColorManager from "../service/ColorManager.js";

/* class instantiation */
const modeMang = new ModeManager()
const colorMang = new ColorManager()

/* references **********************************/
const gridItemStylesheet = document.querySelector('link[href="/styles/gridItem.css"]').sheet;
const rowAmtInput = document.querySelector('#range-items');
const rangeValueSpan = document.querySelector('#range-value');
const gridContainer = document.querySelector(".grid-container");
const buttonModes = document.querySelector(".button-modes");
const clearBtn = document.querySelector("#clear-btn");
const toggleGridBtn = document.querySelector("#toggle-grid-btn");

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

/* event listeners *****************************/

rowAmtInput.addEventListener('input', () => {
  gridContainer.innerHTML = "";
  createGrid();
});

buttonModes.addEventListener('click', (event) => {
  modeMang.setModeKeys(event)
  drawMode = modeMang.setMode(colorMang)
});

gridContainer.addEventListener('mouseover', (event) => {
  const element = event.target

  if (element.classList.contains("grid-item")) {
    console.log(event)
    drawMode(element)
  }
})

clearBtn.addEventListener('click', () => {
  const gridChildElements = gridContainer.childNodes;
  gridChildElements.forEach((child) => {
    child.className = "grid-item";
  })
})

toggleGridBtn.addEventListener('click', () => {
  const gridChildElements = gridContainer.childNodes;
  gridChildElements.forEach((child) => {
    child.classList.toggle('outline');
  })
})

/* app *****************************************/
createGrid();
let drawMode = modeMang.setMode(colorMang) //set starting global drawMode variable
