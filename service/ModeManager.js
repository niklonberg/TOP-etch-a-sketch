class ModeManager {
  constructor() {
    this.colorMode = true;
    this.rainbowMode = false;
    this.eraserMode = false;
  }

  setModeKeys(event) {
    const eventKey = event.target.dataset.key
  
    for (const key in this) {
      if (key === eventKey) {
        this[key] = true;
      } else {
        this[key] = false;
      }
    }
  }

  setMode(element, manager) {
    console.log(manager)
    element.addEventListener('mouseover', (event) => {
      if (event.target.className === 'grid-item') {
        if (this.colorMode) {
          manager.colorMode(event);
        } else if (this.rainbowMode) {
          manager.rainbowMode(event);
        } else if (this.eraserMode) {
          manager.eraserMode(event)
        }
      }
    });
  }

  removeMode() {

  }
}

export default ModeManager

  /* if (modeMang.colorMode) {

  }

  if (modeMang.rainbowMode) {

  }

  if (modeMang.eraserMode) {

  } */