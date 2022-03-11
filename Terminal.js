import defaultSettings from "./defaultSettings.js";
import safeText from "./functions/safeText.js";
import InputReader from "./InputReader.js";
import WindowOperator from "./WindowOperator.js";
import TerminalShell from "./TerminalShell.js";

export class Terminal {
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

    this.getInput = (input) => {
      this.prompt.value = this.commandPrefix;
      this.terminalInput.value = "";
      this.shell.execute(input);
    };

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
    this.canvas.style.backgroundColor = this.backgroundColor;
    this.canvas.innerHTML = "";
    const terminalWindow = document.createElement("div");
    terminalWindow.classList.add("terminal-window");
    terminalWindow.style.overflow = "hide";
    terminalWindow.style.backgroundColor = this.backgroundColor;
    terminalWindow.style.color = this.defaultColor;
    terminalWindow.margin = "0px";
    terminalWindow.style.padding = "5px";
    terminalWindow.style.width = "100%";
    terminalWindow.style.fontSize = "14px";
    terminalWindow.style.minHeight = "250px";
    this.canvas.appendChild(terminalWindow);
    this.windowElement = terminalWindow;
    // we got terminal running, now we need to attach the TerminalOperator to it
    const windowOperator = new WindowOperator(this);
    this.clear = () => {
      windowOperator.clear();
      if (this.terminalType == "as-400")
        this.prompt.innerHTML = this.commandPrefix;
    };
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
        this.inputSpan = document.createElement("span");
        this.inputSpan.style.margin = "0px";
        this.inputSpan.style.marginRight = "-10px";
        this.inputSpan.style.display = "flex";
        this.inputSpan.style.backgroundColor = this.backgroundColor;
        this.prompt = document.createElement("span");
        this.prompt.style.height = "20px";
        this.prompt.style.alignContent = "stretch";
        this.prompt.style.marginTop = "0px";
        this.prompt.style.marginBottom = "0px";
        this.prompt.style.marginRight = "6px";
        this.prompt.style.padding = "5px";
        this.prompt.style.color = this.successColor;
        this.prompt.style.fontSize = "14px";
        this.prompt.innerHTML = this.commandPrefix;
        this.inputSpan.appendChild(this.prompt);

        const terminalInput = document.createElement("input");
        terminalInput.type = "text";
        terminalInput.classList.add("terminal-input");
        terminalInput.style.backgroundColor = this.backgroundColor;
        terminalInput.style.color = this.defaultColor;
        terminalInput.style.height = "20px";
        terminalInput.style.flex = 1;

        terminalInput.style.outline = "0px";
        terminalInput.style.margin = "0px";
        terminalInput.style.borderWidth = "0px";
        terminalInput.style.padding = "2px";
        terminalInput.style.fontSize = "14px";
        terminalInput.value = "";
        terminalInput.autofocus = true;
        this.inputSpan.appendChild(terminalInput);
        this.canvas.appendChild(this.inputSpan);
        this.terminalInput = terminalInput;
        this.reader = new InputReader(this);
        this.readLine = (question) => this.reader.readLine(question);
        this.readKey = (question, map) => this.reader.read(question, map);
        this.shell = new TerminalShell(this);
      }
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
}

export default Terminal;
