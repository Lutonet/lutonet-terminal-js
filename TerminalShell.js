export default class TerminalShell {
  constructor(terminal) {
    this.terminal = terminal;
    if (!terminal.windowElement) {
      console.log("no terminal element was received in the constructor");
      return;
    }
  }

  execute(command) {
    console.log("triggering" + command);
    let data = command.split(" ");
    data = data.map((arg) => arg.trim());
    if (data.length === 0) {
      console.log("empty command");
      return;
    }
    switch (data[0].toLowerCase()) {
      case "":
        break;

      case "clear":
        this.terminal.clear();
        break;

      case "help":
        if (data.length > 1)
          switch (data[1].toLowerCase()) {
            case "--ver":
            case "version":
          }
        this.terminal.writeLine("Help: ");
        this.terminal.writeLine("");
        break;

      case "switchtheme":
        if (data.length === 1) {
          console.log(this.terminal.theme);
          this.terminal.theme =
            this.terminal.theme === "light" ? "dark" : "light";
          console.log("switching theme");
        } else {
          this.terminal.theme = data[1];
        }
        break;
      default:
        this.terminal.writeError("Command not found");
    }
  }
}
