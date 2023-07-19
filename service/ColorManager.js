class ColorManager {
  constructor() {
  }

  colorMode(element) {
    this.colorReset(element)
    element.classList.add("chosen-color")
  }

  rainbowMode(element) {
    element.classList.remove("chosen-color")
    element.classList.add("rainbow-color")
  }

  eraserMode(element) {
    const elementClasses = Array.from(element.classList);
    elementClasses.forEach(cssClass => {
      if (cssClass === "grid-item" || cssClass === "outline") {
        return
      } else {
        element.classList.remove(cssClass)
      }
    })
  }

  colorReset(element) {
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
