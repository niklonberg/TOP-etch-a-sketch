/* import */
import ModeManager from "../service/ModeManager.js";
import ColorManager from "../service/ColorManager.js";

/* references **********************************/
const gridItemStylesheet = document.querySelector('link[href="/styles/gridItem.css"]').sheet;
const rowAmtInput = document.querySelector('#range-items');
const rangeValueSpan = document.querySelector('#range-value');
const gridContainer = document.querySelector(".grid-container");
const buttonModes = document.querySelector(".button-modes");
const clearBtn = document.querySelector("#clear-btn");
const toggleGridBtn = document.querySelector("#toggle-grid-btn");
const colorBtnInput = document.querySelector("#color-btn-input");
const incrementDarkenBtn = document.querySelector("#increment-btn");

/* class instantiation */
const modeMang = new ModeManager()
const colorMang = new ColorManager(colorBtnInput)

/* functions  **********************************/

function getGridItemAmount() {
  const rowAmt = rowAmtInput.value;
  const totalGridItems = rowAmt * rowAmt;
  return {rowAmt, totalGridItems};
}

function createGridItem() {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  if (toggleGrid) {
    gridItem.classList.add("outline");
  }
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

gridContainer.addEventListener('click', () => {
  activateDraw = !activateDraw;
})

gridContainer.addEventListener('mouseover', (event) => {
  const element = event.target;

  if (activateDraw) {
    if (element.classList.contains("grid-item")) {
      drawMode(element);
    }
  }
})

buttonModes.addEventListener('click', (event) => {
  const btnElements = Array.from(buttonModes.children);
  btnElements.forEach(element => {
    element.classList.remove('active-btn');  
    colorBtnInput.classList.remove('show'); 
  })

  event.target.classList.add('active-btn');

  if (event.target.id === 'color-btn') {
    colorBtnInput.classList.add('show');    
  }
  
  modeMang.setModeKeys(event);
  drawMode = modeMang.setMode(colorMang);
});

colorBtnInput.addEventListener('click', (event) => {
  event.stopPropagation();
})

incrementDarkenBtn.addEventListener('click', (event) => {
  event.target.classList.toggle('active-btn');
  colorMang.incrementDarken = !colorMang.incrementDarken;
})

clearBtn.addEventListener('click', () => {
  const gridChildElements = gridContainer.childNodes;
  gridChildElements.forEach((child) => {
    child.style.backgroundColor = "";
  })
})

toggleGridBtn.addEventListener('click', () => {
  toggleGrid = !toggleGrid;
  toggleGridBtn.classList.toggle('active-btn');
  
  const gridChildElements = gridContainer.childNodes;
  gridChildElements.forEach((child) => {
    child.classList.toggle('outline');
  })
})

/* app *****************************************/
let drawMode = modeMang.setMode(colorMang) //set starting global drawMode variable
let activateDraw = false;   
let toggleGrid = true;
createGrid();

console.log(colorMang)
