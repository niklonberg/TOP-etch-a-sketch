class ColorManager {
  constructor(input) {
    this.colorBtnInput = input;
    this.incrementDarken = false;
  }

  colorMode = (element) => {
    const inputHexValue = this.colorBtnInput.value
    console.log(inputHexValue)
    const value = inputHexValue.replace("#", "");
    console.log(value)
    const r = parseInt(value.substring(0, 2), 16);
    const g = parseInt(value.substring(2, 4), 16);
    const b = parseInt(value.substring(4), 16);
    console.log(r, g, b)
    
    element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }

  rainbowMode = (element) => {
    const rgbVal = this.randomColor();
    console.log(rgbVal)
    element.style.backgroundColor = `rgb(${rgbVal[0]},${rgbVal[1]},${rgbVal[2]})`;
  }

  eraserMode(element) {
    element.style.backgroundColor = "";
  }

  randomColor() {
    let rgbArray = []
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    rgbArray.push(r, g, b);
    return rgbArray
  }
}

export default ColorManager

// eraserMode(element) {
//   const elementClasses = Array.from(element.classList);
//   elementClasses.forEach(cssClass => {
//     if (cssClass === "grid-item" || cssClass === "outline") {
//       return
//     } else {
//       element.classList.remove(cssClass)
//     }
//   })
// }
