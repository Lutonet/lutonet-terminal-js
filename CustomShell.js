class CustomShell {
  constructor(terminal) {
    this.blockDefault = false;
    this.terminal = terminal;
    if (!this.terminal) {
      console.log("Error, can't connect to the terminal");
    }
  }

  execute = (command) => {
    {
      const data = command.split(" ");
      switch (data[0]) {
        case "":
          break;
      }
      /*
      data: [list of arguments given by user],
      blockDefault: bool,
      terminal: terminal object instance
      */
    }
  };
}
