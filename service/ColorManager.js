class ColorManager {
  constructor() {
  }

  colorMode(element) {
    element.classList.add("chosen-color")
  }

  rainbowMode(element) {
    element.classList.add("rainbow-color")
  }

  eraserMode(element) {
    const elementClasses = Array.from(element.classList);
    elementClasses.forEach(key => {
      if (key === "grid-item") {
        return
      } else {
        element.classList.remove(key)
      }
    })
  }
}

export default ColorManager
