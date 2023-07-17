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
}

export default ModeManager

