class ModeManager {
  constructor() {
    this.colorMode = true;
    this.rainbowMode = false;
    this.eraserMode = false;
  }

  setModeKeys(event) {
    const eventElementDataKey = event.target.dataset.key
  
    for (const key in this) {
      if (key === eventElementDataKey) {
        this[key] = true;
      } else {
        this[key] = false;
      }
    }
  }

  setMode(manager) {
    let mode;
    if (this.colorMode) {
      mode = manager.colorMode;
    } else if (this.rainbowMode) {
      mode = manager.rainbowMode;
    } else if (this.eraserMode) {
      mode = manager.eraserMode;
    }
    return mode
  }
}

export default ModeManager

