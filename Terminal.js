import defaultSettings from "./defaultSettings.js";
import safeText from "./functions/safeText.js";

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
        if (props.theme)
          if (props.theme !== "light") {
            if (settings[props.theme]) {
              for (let setting in settings[props.theme]) {
                this[setting] = safeText(settings[setting]);
              }
            }
          }

        // remove cursor for logger
        if (this.terminalType === "logger") this.cursorShow = false;

        // load settings from props
        for (let property in props) {
          if (this[property]) {
            this[property] = safeText(props[property]);
          }
        }
      } catch {}
      // all properties loaded
    }

    // check if element exists;
    this.console = document.querySelector(this.element);
    try {
      this.innerHtml = "";
    } catch (err) {
      console.log(err);
      return;
    }

    /* cool we are all ready with properties
     *
     */
  }
}
export default Terminal;
