import defaultSettings from "./defaultSettings.js";
import safeText from "./functions/safeText.js";
import InputReader from "./InputReader.js";
import WindowOperator from "./functions/terminalFunctions.js";

class Terminal {
  /***********          constructor         ***********/
  constructor(props) {
    // load all default settings
    this.canvas = "";
    this.windowElement = "";
    this.isLoaded = false;
    this.settings = defaultSettings();
    for (let setting in this.settings.defaultSettings) {
      this[setting] = this.settings.defaultSettings[setting];
    }
    this.element = this.settings.defaultSettings.element;

    // if props were given to the consturctor apply them
    if (props) {
      try {
        // first load the theme so user can rewrite settings later
        if (props.theme != "light") {
          let tmp = this.settings[props.theme];
          for (let set in tmp) {
            this[set] = safeText(this.settings[props.theme][set]);
          }
        }
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
    this._theme = value;
    for (let setting in this.settings[value]) {
      this[setting] = this.settings[value][setting];
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

  get dimmedColor() {
    return this._dimmedColor;
  }
  set dimmedColor(value) {
    this._dimmedColor = value;
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
    this.canvas = document.querySelector(this.element);
    this.canvas.classList.add("terminal-js");
    this.canvas.innerHTML = "";
    const terminalWindow = document.createElement("div");
    terminalWindow.classList.add("terminal-window");
    terminalWindow.style.backgroundColor = this.backgroundColor;
    terminalWindow.style.color = this.defaultColor;
    //terminalWindow.style.display = "flex";
    //terminalWindow.style.flexDirection = "column";

    //terminalWindow.style.flex = 1;
    terminalWindow.margin = "0px";
    terminalWindow.style.padding = "5px";
    terminalWindow.style.width = "600px";
    terminalWindow.style.fontSize = "15px";
    terminalWindow.style.minHeight = "250px";
    this.canvas.appendChild(terminalWindow);
    this.windowElement = terminalWindow;
    // we got terminal running, now we need to attach the TerminalOperator to it
    const windowOperator = new WindowOperator(this);
    this.clear = () => windowOperator.clear();
    this.write = (string) => windowOperator.write(string);
    this.writeLine = (string) => windowOperator.writeLine(string);
    this.writeError = (string) => windowOperator.writeError(string);
    this.writeInfo = (string) => windowOperator.writeInfo(string);
    this.writeSuccess = (string) => windowOperator.writeSuccess(string);
    /**
     * If the element is AS 400 create two elements <div><div> second with 'terminal-input'
     * In case of terminal create single element with 'terminal-input' and 'terminal-window' classes
     * In case of logger create single element with 'terminal-window' class
     */
    if (this.terminalType !== "logger") {
      if (this.terminalType === "as-400") {
        const terminalInput = document.createElement("input");
        terminalInput.type = "text";
        terminalInput.classList.add("terminal-input");
        terminalInput.style.backgroundColor = this.backgroundColor;
        terminalInput.style.color = this.defaultColor;
        terminalInput.style.height = "20px";
        terminalInput.style.outline = "0px";
        terminalInput.style.margin = "0px";
        terminalInput.style.borderWidth = "0px";
        terminalInput.style.padding = "5px";
        terminalInput.style.width = "600px";
        terminalInput.style.fontSize = "15px";
        terminalInput.value = this.commandPrefix + " ";
        terminalInput.autofocus = true;
        this.canvas.appendChild(terminalInput);
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

  getInput = (input) => {
    let reader = document.querySelector(".terminal-input");
    reader.value = "";
    reader.value = this.commandPrefix + " ";
    console.log("command received: " + input);
  };
}

export default Terminal;
