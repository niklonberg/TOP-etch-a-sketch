class ModeManager {
  constructor() {
    this.colorMode = true;
    this.rainbowMode = false;
    this.eraserMode = false;

    this.colorModeBtn = document.getElementById('color-btn');
    this.rainBowModeBtn = document.getElementById('rainbow-btn');
    this.eraserModeBtn = document.getElementById('eraser-btn');
  }
}

export default ModeManager