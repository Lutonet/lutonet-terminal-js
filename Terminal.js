import defaultSettings from "./defaultSettings.js";
import safeText from "./functions/safeText.js";
import InputReader from "./InputReader.js";

class Terminal {
  /***********          constructor         ***********/
  constructor(props) {
    // load all default settings
    this.isLoaded = false;
    const settings = defaultSettings();
    for (let setting in settings.defaultSettings) {
      this[setting] = settings.defaultSettings[setting];
      console.log(
        "applying " +
          setting +
          " setting value: " +
          settings.defaultSettings[setting]
      );
    }
    this.element = settings.defaultSettings.element;

    // if props were given to the consturctor apply them
    if (props) {
      try {
        // first load the theme so user can rewrite settings later
        if (props.theme) console.log(props.theme);
        if (props.theme != "light") {
          let tmp = settings[props.theme];
          for (let set in tmp) {
            console.log("applying " + set + " for theme");
            this[set] = safeText(settings[props.theme][set]);
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
    this._theme = value;
    if (this.isLoaded) {
      this.reload();
    }
  }

  get cursor() {}
  set cursor(value) {}

  get commandPrefix() {}
  set commandPrefix(value) {}

  get cursorShow() {}
  set cursorShow(value) {}

  get cursorFlashing() {}
  set cursorFlashing(value) {}

  get displayLogs() {}
  set displayLogs(value) {}

  get displayTitle() {}
  set displayTitle(value) {}

  get titleInverted() {}
  set titleInverted(value) {}

  get title() {}
  set title(value) {}

  get backgroundColor() {}
  set backgroundColor(value) {}

  get defaultColor() {}
  set defaultColor(value) {}

  get errorColor() {}
  set errorColor(value) {}

  get infoColor() {}
  set infoColor(value) {}

  get successColor() {}
  set successColor(value) {}

  get invertedText() {}
  set invertedText(value) {}

  // initialize our elements - in all cases initialize terminal-display element
  start = () => {
    // check if element exists;
    this.isLoaded = true;
    console.log(this.element);
    const canvas = document.querySelector(this.element);
    console.log(canvas);

    canvas.innerHTML = "";
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
    canvas.appendChild(terminalWindow);
    terminalWindow.style.fontFamily = "Cascadia Code, Consolas";
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
    this.console.innerHTML = "";
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
