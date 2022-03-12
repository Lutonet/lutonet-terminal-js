export default class TerminalShell {
  constructor(terminal, shells) {
    this.activateNext = false;
    this.terminal = terminal;
    if (!terminal.windowElement) {
      console.log("no terminal element was received in the constructor");
      return;
    }
  }

  execute(command) {
    let data = command.split(" ");
    if (data.length === 0) {
      console.log("empty command");
      return;
      data = data.map((arg) => arg.trim());
    }
    let blockDefault = false;
    if (shells) {
      shells.forEach((shell) => {
        if (shell.blockDefault) blockDefault = true;
        execute({});
      });
    }
    if (!blockDefault) {
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
          if (this.activateNext) {
          }
          this.terminal.writeError("Command not found");
      }
    }
  }
}
