export default class WindowOperator {
  constructor(terminal) {
    this.terminal = terminal;
    if (!terminal.windowElement) {
      console.log("no window element to display at");
      return;
    }
    this.terminalWindow = terminal.windowElement;
  }
  // here we define basic terminal services
  clear() {
    this.terminal.windowElement.innerHTML = "";
  }
  write(str) {
    const string = document.createElement("span");
    string.classList.add("terminal-default");
    string.style.padding = "2px";
    string.style.color = terminal.defaultColor;
    string.innerHTML = str;
    this.terminal.windowElement.appendChild(string);
  }
  writeLine(str) {
    const string = document.createElement("div");
    string.classList.add("terminal-default");
    string.style.padding = "2px";
    string.style.color = terminal.defaultColor;
    string.innerHTML = str;
    this.terminal.windowElement.appendChild(string);
  }

  writeError(str, errorTitle) {
    if (this.terminal.displayTitle) {
      const subtitle = document.createElement("span");
      if (this.terminal.invertedText) {
        subtitle.style.backgroundColor = this.terminal.errorColor;
        subtitle.style.color = this.terminal.invertedText;
        subtitle.style.fontWeight = "bold";
      } else {
        subtitle.style.color = this.terminal.errorColor;
        subtitle.style.fontWeight = "bold";
      }
      //      subtitle.style.padding = "2px";
      subtitle.classList.add("terminal-error-title");
      let title = errorTitle ? errorTitle : "Error:";
      subtitle.innerText = title;
      subtitle.style.marginRight = "5px";
      this.terminal.windowElement.appendChild(subtitle);
    }
    const string = document.createElement("span");

    string.classList.add("terminal-default");
    string.style.color = this.terminal.errorColor;
    string.style.padding = "2px";
    string.innerHTML = str;
    this.terminal.windowElement.appendChild(string);
    this.terminal.windowElement.appendChild(document.createElement("br"));
  }

  writeInfo(str, infoTitle) {
    if (this.terminal.displayTitle) {
      const subtitle = document.createElement("span");
      if (this.terminal.invertedText) {
        subtitle.style.backgroundColor = this.terminal.infoColor;
        subtitle.style.color = this.terminal.invertedText;
        subtitle.style.fontWeight = "bold";
      } else {
        subtitle.style.color = this.terminal.infoColor;
        subtitle.style.fontWeight = "bold";
      }
      //      subtitle.style.padding = "2px";
      subtitle.classList.add("terminal-error-title");
      let title = infoTitle ? infoTitle : "Information:";
      subtitle.innerText = title;
      subtitle.style.marginRight = "5px";
      this.terminal.windowElement.appendChild(subtitle);
    }
    const string = document.createElement("span");

    string.classList.add("terminal-default");
    string.style.color = this.terminal.infoColor;
    string.style.padding = "2px";
    string.innerHTML = str;
    this.terminal.windowElement.appendChild(string);
    this.terminal.windowElement.appendChild(document.createElement("br"));
  }

  writeSuccess(str, successTitle) {
    if (this.terminal.displayTitle) {
      const subtitle = document.createElement("span");
      if (this.terminal.invertedText) {
        subtitle.style.backgroundColor = this.terminal.successColor;
        subtitle.style.color = this.terminal.invertedText;
        subtitle.style.fontWeight = "bold";
      } else {
        subtitle.style.color = this.terminal.successColor;
        subtitle.style.fontWeight = "bold";
      }
      //  subtitle.style.padding = "2px";
      subtitle.classList.add("terminal-error-title");
      let title = successTitle ? successTitle : "Success:";
      subtitle.innerText = title;
      subtitle.style.marginRight = "5px";
      this.terminal.windowElement.appendChild(subtitle);
    }
    const string = document.createElement("span");

    string.classList.add("terminal-default");
    string.style.color = this.terminal.successColor;
    string.style.padding = "2px";
    string.innerHTML = str;
    this.terminal.windowElement.appendChild(string);
    this.terminal.windowElement.appendChild(document.createElement("br"));
  }
}
