class ColorManager {
  constructor(input) {
    this.colorBtnInput = input
  }

  colorMode = (element) => {
    const value = this.colorBtnInput.value
    element.style.backgroundColor = `${value}`;
  }

  rainbowMode = (element) => {
    const rgbVal = this.randomColor();
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
