class ColorManager {
  constructor() {
  }

  colorMode(element) {
    element.style.backgroundColor = "blue";
  }

  rainbowMode(element) {
    element.style.backgroundColor = "red";
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
