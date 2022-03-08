class InputReader {
  constructor(executeInput, watch = true) {
    this.watch = watch;
    this.input = document.querySelector(".terminal-input");
    if (this.input) {
      this.input.addEventListener("keydown", logKey);
      this.readerLine = "";
    }

    this.logKey = (e) => {
      if (watch) {
        if (e.code == "enter") {
          executeInput(this.readerLine);
          this.readerLine = "";
        } else {
          readerLine += e.code;
        }
      }
    };
  }
}

export default InputReader;
