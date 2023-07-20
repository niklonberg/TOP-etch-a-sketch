class ColorManager {
  constructor(input) {
    this.colorBtnInput = input;
    this.incrementDarkenState = false;
  }

  colorMode = (element) => {
    const rgbArray = [];
    const inputHexValue = this.colorBtnInput.value
    console.log(inputHexValue)
    const value = inputHexValue.replace("#", "");
    console.log(value)
    const r = parseInt(value.substring(0, 2), 16);
    const g = parseInt(value.substring(2, 4), 16);
    const b = parseInt(value.substring(4), 16);
    console.log(r, g, b)
    rgbArray.push(r, g, b);
    console.log(rgbArray);
    if (this.incrementDarkenState) {
      if (element.classList.contains('colored')) {

      }
    }
    element.style.backgroundColor = `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
  }

  rainbowMode = (element) => {
    const rgbArray = this.randomColor();
    console.log(rgbArray)
    element.style.backgroundColor = `rgb(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]})`;
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

  incrementDarken(rgbArray) {
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
