class ColorManager {
  constructor() {
  }

  colorMode(event) {
    /* event.target.style.backgroundColor = "purple" */
    event.target.classList.add("chosen-color");
    /* event.target.classList.remove('grid-item') */
  }

  rainbowMode (event) {
    event.target.style.backgroundColor = "green"
    event.target.style.width = "20px"
    /* event.target.classList.add("rainbow-color"); */
    event.target.classList.remove('grid-item')
  }

  eraserMode (event) {
    /* event.target.style.backgroundColor = "orange" */
    console.log(event)
    event.target.classList.remove("chosen-color", "rainbow-color");
  }
}

export default ColorManager
