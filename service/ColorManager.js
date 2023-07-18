class ColorManager {
  constructor() {
  }

  colorMode(element) {
    /* element.style.backgroundColor = "red"; */
    element.classList.add("chosen-color")
  }

  rainbowMode(element) {
    // element.style.backgroundColor = "blue";
    element.classList.add("rainbow-color")
  }

  eraserMode() {

  }
}

export default ColorManager
