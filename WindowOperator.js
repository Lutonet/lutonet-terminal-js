export default class WindowOperator {
  constructor(terminal) {
    this.terminal = terminal;
    if (!terminal.windowElement) {
      console.log("no window element to display at");
      return;
    }
    this.screen = terminal.windowElement;
  }
  // here we define basic terminal services
  clear() {
    this.screen.innerHTML = "";
  }
  write(str) {
    if (!str) str = "";
    const string = document.createElement("span");
    string.classList.add("terminal-default");
    string.style.padding = "2px";
    string.style.color = terminal.defaultColor;
    string.innerHTML = str;
    this.screen.prepend(string);
  }
  writeLine(str) {
    if (!str) str = "";
    const string = document.createElement("div");
    string.classList.add("terminal-default");
    string.style.padding = "2px";
    string.style.color = terminal.defaultColor;
    string.innerHTML = str;
    this.screen.prepend(string);
  }

  writeError(str, errorTitle) {
    if (!str) str = "";
    let messageSpan;
    messageSpan = document.createElement("div");
    if (this.terminal.displayTitle) {
      messageSpan.style.width = "100%";
      messageSpan.style.margin = "0px";
      messageSpan.style.padding = "0px";

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
      messageSpan.append(subtitle);
    }
    const string = document.createElement("span");

    string.classList.add("terminal-default");
    string.style.color = this.terminal.errorColor;
    string.style.padding = "2px";
    string.innerHTML = str + "<br>";
    messageSpan.append(string);
    this.screen.prepend(messageSpan);
  }

  writeInfo(str, infoTitle) {
    if (!str) str = "";
    let messageSpan;
    messageSpan = document.createElement("span");
    if (this.terminal.displayTitle) {
      messageSpan.style.width = "100%";
      messageSpan.style.margin = "0px";
      messageSpan.style.padding = "0px";

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
      messageSpan.append(subtitle);
    }
    const string = document.createElement("span");

    string.classList.add("terminal-default");
    string.style.color = this.terminal.infoColor;
    string.style.padding = "2px";
    string.innerHTML = str + " <br>";
    messageSpan.append(string);
    this.terminal.windowElement.prepend(messageSpan);
  }

  writeSuccess(str, successTitle) {
    if (!str) str = "";
    let messageSpan;
    messageSpan = document.createElement("div");
    if (this.terminal.displayTitle) {
      messageSpan.style.width = "100%";
      messageSpan.style.margin = "0px";
      messageSpan.style.padding = "0px";

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
      messageSpan.append(subtitle);
    }
    const string = document.createElement("span");

    string.classList.add("terminal-default");
    string.style.color = this.terminal.successColor;
    string.style.padding = "2px";
    string.innerHTML = str + " <br>";
    messageSpan.append(string);
    this.terminal.windowElement.prepend(messageSpan);
  }

  writeHTML(html) {
    const newElement = document.createElement("div");
    newElement.style.display = "block";
    newElement.style.maxWidth = "100%";
    newElement.style.margin = "5px";
    newElement.innerHTML = html;
    this.terminal.windowElement.prepend(newElement);
  }
  writeJSON(json) {
    console.log("called");
    this.writeHTML(this.terminal.json.getHtml(json));
  }
  catch(error) {
    this.writeError(error);
  }
}
