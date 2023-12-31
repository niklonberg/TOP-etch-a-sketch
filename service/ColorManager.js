class ColorManager {
  constructor(input) {
    this.colorBtnInput = input;
    this.incrementDarkenState = false;
  }

  colorMode = (element) => {
    const inputHexValue = this.colorBtnInput.value;
    
    const rgbArray = this.convertHexToRgb(inputHexValue);

    if (!this.incrementDarkenState) {
      element.classList.add("colored");
      element.style.backgroundColor = `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
    } else if (this.incrementDarkenState) {
      if (element.classList.contains('colored')) {
        this.incrementDarken(element);
      } else if (!element.classList.contains('colored')) {
        element.classList.add("colored");
        element.style.backgroundColor = `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
      }
    }
  }

  incrementDarken(element) {
    const elementsRgbStr = element.style.backgroundColor;
    const strValuesArr = elementsRgbStr.substring(4, elementsRgbStr.length - 1).split(", ")
    const intRgbValuesArr = [];
    strValuesArr.forEach(strVal => intRgbValuesArr.push(parseInt(strVal)));
    const reducedBy10Percent = intRgbValuesArr.map(val => Math.floor(val * 0.9));
    element.style.backgroundColor = `rgb(${reducedBy10Percent[0]}, ${reducedBy10Percent[1]}, ${reducedBy10Percent[2]})`;
  }

  rainbowMode = (element) => {
    const rgbArray = this.randomColor();
    element.classList.add("colored");
    element.style.backgroundColor = `rgb(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]})`;
  }

  eraserMode(element) {
    element.classList.remove("colored");
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

  convertHexToRgb(inputHexValue) {
    const rgbArray = [];
    const value = inputHexValue.replace("#", "");
    
    const r = parseInt(value.substring(0, 2), 16);
    const g = parseInt(value.substring(2, 4), 16);
    const b = parseInt(value.substring(4), 16);

    rgbArray.push(r, g, b);
    return rgbArray
  }
}

export default ColorManager

