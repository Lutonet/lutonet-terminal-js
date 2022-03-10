export default class InputReader {
  constructor(terminal) {
    if (!terminal) {
      console.log("Input reader needs a terminal class to work with");
      return;
    }
    this.waitingResponse = false;
    this.terminal = terminal;
    let executeInput = terminal.getInput;
    this.input = terminal.terminalInput;
    this.prompt = terminal.prompt;
    this.listener = this.input.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        if (this.waitingResponse) this.transmit;
        else executeInput(this.input.value);
      }
    });
    this.readLine = (prompt) => {
      return new Promise((resolve) => {
        this.prompt.innerHTML = prompt + " " + terminal.commandPrefix;
        this.input.value = "";
        this.waitingResponse = true;
        const keypressed = (e) => {
          if (e.key == "Enter") {
            this.waitingResponse = false;
            let value = this.input.value;
            this.prompt.innerHTML = terminal.commandPrefix;
            resolve(value);
            this.input.removeEventListener("keydown", keypressed);
          }
        };
        this.input.addEventListener("keydown", keypressed);
      });
    };
    this.read = (prompt, keys) => {
      return new Promise((resolve) => {
        this.prompt.innerHTML = prompt + " " + terminal.commandPrefix;
        this.input.value = "";
        this.waitingResponse = true;

        const keypressed = (e) => {
          e.preventDefault();
          if (keys) {
            if (keys.includes(e.key)) {
              resolve(e.key);
              this.waitingResponse = false;
              this.input.removeEventListener("keydown", keypressed);
              this.prompt.innerHTML = terminal.commandPrefix;
              this.input.value = "";
            } else {
              this.prompt.innerHTML = prompt + " " + terminal.commandPrefix;
              this.input.value = "";
            }
          } else {
            resolve(e.key);
            this.waitingResponse = false;
            this.input.removeEventListener("keydown", keypressed);
            this.prompt.innerHTML = terminal.commandPrefix;
            this.input.value = "";
          }
        };
        this.input.addEventListener("keydown", keypressed);
      });
    };
  }
}
