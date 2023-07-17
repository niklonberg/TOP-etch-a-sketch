class ColorManager {
  constructor() {
  }

  colorMode(event) {
    event.target.style.backgroundColor = 'white'
  }

  rainbowMode (event) {
    event.target.style.backgroundColor = 'red'
  }

  eraserMode (event) {
    event.target.style.backgroundColor = 'green'
  }
}

export default ColorManager
