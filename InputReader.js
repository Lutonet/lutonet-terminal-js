export default class InputReader {
  constructor(terminal) {
    if (!terminal) {
      console.log("Input reader needs a terminal class to work with");
      return;
    }
    this.waitingResponse = false;
    this.requester = "";
    this.terminal = terminal;
    let executeInput = terminal.getInput;
    this.input = terminal.terminalInput;
    this.listener = this.input.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        if (this.waitingResponse) this.transmit;
        else executeInput(this.input.value.slice(2));
      }
    });
    this.readLine = (prompt) => {
      return new Promise((resolve) => {
        this.input.value = prompt + "> ";
        let toRemove = this.input.value.length;
        this.input.placeHolder = prompt;
        this.waitingResponse = true;
        this.input.addEventListener("keydown", (e) => {
          if (e.key == "Enter") {
            this.waitingResponse = false;
            let value = this.input.value;
            this.input.value = terminal.commandPrefix + " ";
            resolve(value.slice(toRemove - 1));
          }
        });
      });
    };
  }
}
