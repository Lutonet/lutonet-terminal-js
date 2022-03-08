import defaultSettings from "./defaultSettings.js";
import safeText from "./functions/safeText.js";
import InputReader from "./InputReader.js";

class Terminal {
  constructor(props) {
    // load all default settings
    const settings = defaultSettings();
    for (let setting in settings.defaultSettings) {
      this[setting] = settings.defaultSettings[setting];
    }
    this.element = settings.defaultSettings.element;

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
        if (this.terminalType === "logger") this.cursorShow = false;

        // load settings from props
        console.log(props);

        for (let property in props) {
          if (this[property]) {
            this[property] = safeText(props[property]);
            this.console.log("recording property " + property);
          }
        }
      } catch {}
      // all properties loaded
    }
    console.log("theme" + this.theme);
    // check if element exists;
    this.console = document.querySelector(this.element);
    try {
      this.innerHtml = "";
    } catch (err) {
      console.log(err);
      return;
    }

    /**
     * cool we are all ready with properties
     * we use two classess 'terminal-window' and 'terminal-input'
     * Logger will have single div with just terminal-window class
     * AS-400 will have two divs first terminal-window and second(single line) terminal input
     * Terminal will have one div with both classes
     */

    // initialize our elements - in all cases initialize terminal-display element
    this.console.innerHTML = "";
    const windowElement = document.createElement("div");
    windowElement.classList.add("terminal-window");
    console.log(this.backgroundColor);
    windowElement.style.backgroundColor = this.backgroundColor;
    windowElement.style.color = this.defaultColor;
    windowElement.style.display = "flex";
    windowElement.style.flexDirection = "column";
    windowElement.style.flex = 1;
    windowElement.style.padding = "6px";
    windowElement.style.width = "600px";
    windowElement.style.fontSize = "15px";
    //windowElement.style.fontWeight = "bold";
    windowElement.style.height = "450px";
    this.console.appendChild(windowElement);
    windowElement.style.fontFamily = "Cascadia Code, Consolas";
    windowElement.innerText = "Hello from the terminal >";
    /**
     * If the element is AS 400 create two elements <div><div> second with 'terminal-input'
     * In case of terminal create single element
     *
     */
    if (this.terminalType !== "logger") {
      this.reader = new InputReader(this.getInput, ".terminal-input");
    }

    this.getInput = (input, length) => {
      /**
       *
       * Work with the user Input - we need to check if the type is AS 400 - then we delete all in element
       * if it is terminal we go to new line
       *
       */
    };
  }
}
export default Terminal;
