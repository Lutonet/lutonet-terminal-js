class CustomShell {
  constructor(terminal) {
    this.terminal = terminal;
    if (!this.terminal) {
      console.log("Error, can't connect to the terminal");
    }
  }

  execute = ({ command }) => {
    {
      /*
      data: [list of arguments given by user],
      blockDefault: bool,
      terminal: terminal object instance
      */
    }
  };
}
