class ModeManager {
  constructor() {
    this.colorMode = true;
    this.rainbowMode = false;
    this.eraserMode = false;
  }

  setMode(event) {
    const eventKey = event.target.dataset.key
  
    for (const key in this) {
      if (key === eventKey) {
        this[key] = true;
      } else {
        this[key] = false;
      }
    }
  }
}

export default ModeManager

  /* if (modeMang.colorMode) {

  }

  if (modeMang.rainbowMode) {

  }

  if (modeMang.eraserMode) {

  } */