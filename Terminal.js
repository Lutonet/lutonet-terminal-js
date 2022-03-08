import defaultSettings from "./defaultSettings.js";
import safeText from "./functions/safeText.js";
import InputReader from "./InputReader.js";

class Terminal {
  /***********          constructor         ***********/
  constructor(props) {
    // load all default settings
    this.canvas = "";
    this.isLoaded = false;
    this.settings = defaultSettings();
    for (let setting in this.settings.defaultSettings) {
      this[setting] = this.settings.defaultSettings[setting];
      console.log(
        "applying " +
          setting +
          " setting value: " +
          this.settings.defaultSettings[setting]
      );
    }
    this.element = this.settings.defaultSettings.element;

    // if props were given to the consturctor apply them
    if (props) {
      try {
        // first load the theme so user can rewrite settings later
        if (props.theme) console.log(props.theme);
        if (props.theme != "light") {
          let tmp = this.settings[props.theme];
          for (let set in tmp) {
            console.log("applying " + set + " for theme");
            this[set] = safeText(this.settings[props.theme][set]);
          }
        }
        // remove cursor for logger

        // load settings from props
        console.log(props);

        for (let property in props) {
          if (this[property]) {
            this[property] = safeText(props[property]);
            this.console.log("recording property " + property);
          }
        }
      } catch {}

      if (this.terminalType === "logger") this.cursorShow = false;
      // all properties loaded
    }
  }

  /********** Getters and Setters ***********/

  get element() {
    return this._element;
  }
  set element(value) {
    this._element = value;
    if (this.isLoaded) {
      this.reload();
    }
  }

  get terminalType() {
    return this._terminalType;
  }
  set terminalType(value) {
    this._terminalType = value;
    if (this.isLoaded) {
      this.reload();
    }
  }

  get theme() {
    return this._theme;
  }
  set theme(value) {
    console.log("setting theme : " + value);
    this._theme = value;
    for (let setting in this.settings[value]) {
      this[setting] = this.settings[value][setting];
      console.log(
        "Setting setting " + this[value] + "to" + this.settings[value][setting]
      );
    }

    if (this.isLoaded) {
      this.reload();
    }
  }

  get cursor() {
    return this._cursor;
  }
  set cursor(value) {
    this._cursor = value;
    if (this.isLoaded) {
      this.reload();
    }
  }

  get commandPrefix() {
    return this._commandPrefix;
  }
  set commandPrefix(value) {
    this._commandPrefix = value;
    if (this.isLoaded) {
      this.reload();
    }
  }

  get cursorShow() {
    return this._cursorShow;
  }
  set cursorShow(value) {
    this._cursorShow = value;
    if (this.isLoaded) {
      this.reload();
    }
  }

  get cursorFlashing() {
    return this._cursorFlashing;
  }
  set cursorFlashing(value) {
    this._cursorFlashin = value;
    if (this.isLoaded) {
      this.reload();
    }
  }

  get displayLogs() {
    return this._displayLogs;
  }
  set displayLogs(value) {
    this._displayLogs = value;
    if (this.isLoaded) {
      this.reload();
    }
  }

  get displayTitle() {
    return this._displayTitle;
  }
  set displayTitle(value) {
    this._displayTitle = value;
    if (this.isLoaded) {
      this.reload();
    }
  }

  get titleInverted() {
    return this._titleInverted;
  }
  set titleInverted(value) {
    this._titleInverted = value;
    if (this.isLoaded) {
      this.reload();
    }
  }

  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
    if (this.isLoaded) {
      this.reload();
    }
  }

  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    this._backgroundColor = value;
    if (this.isLoaded) {
      this.reload();
    }
  }

  get defaultColor() {
    return this._defaultColor;
  }
  set defaultColor(value) {
    this._defaultColor = value;
    if (this.isLoaded) {
      this.reload();
    }
  }

  get errorColor() {
    return this._errorColor;
  }
  set errorColor(value) {
    this._errorColor = value;
    if (this.isLoaded) {
      this.reload();
    }
  }

  get infoColor() {
    return this._infoColor;
  }
  set infoColor(value) {
    this._infoColor = value;
    if (this.isLoaded) {
      this.reload();
    }
  }

  get successColor() {
    return this._successColor;
  }
  set successColor(value) {
    this._successColor = value;
    if (this.isLoaded) {
      this.reload();
    }
  }

  get invertedText() {
    return this._invertedText;
  }
  set invertedText(value) {
    this._invertedText = value;
    if (this.isLoaded) {
      this.reload();
    }
  }

  // initialize our elements - in all cases initialize terminal-display element
  start = () => {
    // check if element exists;
    this.isLoaded = true;
    console.log(this.element);
    this.canvas = document.querySelector(this.element);
    this.canvas.classList.add("terminal-js");

    this.canvas.innerHTML = "";
    const terminalWindow = document.createElement("div");
    terminalWindow.classList.add("terminal-window");
    console.log(this.backgroundColor);
    terminalWindow.style.backgroundColor = this.backgroundColor;
    terminalWindow.style.color = this.defaultColor;
    terminalWindow.style.display = "flex";
    terminalWindow.style.flexDirection = "column-reverse";
    terminalWindow.style.flex = 1;
    terminalWindow.style.padding = "6px";
    terminalWindow.style.width = "600px";
    terminalWindow.style.fontSize = "15px";
    terminalWindow.style.height = "450px";
    this.canvas.appendChild(terminalWindow);
    //terminalWindow.style.fontFamily = "Cascadia Code, Consolas";
    terminalWindow.innerHTML = "Hello from the terminal<br>>";
    /**
     * If the element is AS 400 create two elements <div><div> second with 'terminal-input'
     * In case of terminal create single element with 'terminal-input' and 'terminal-window' classes
     * In case of logger create single element with 'terminal-window' class
     */
    if (this.terminalType !== "logger") {
      if (this.terminalType === "as-400") {
      }

      this.reader = new InputReader(this.getInput, ".terminal-input");
    }
  };
  // unload the element
  stop = () => {
    this.canvas.innerHTML = "";
    this.isLoaded = false;
  };
  // reload elements
  reload = () => {
    this.stop();
    this.start();
  };

  getInput = (input, length) => {
    /**
     *
     * Work with the user Input - we need to check if the type is AS 400 - then we delete all in element
     * if it is terminal we go to new line
     *
     */
  };
}

export default Terminal;
