class InputReader {
  constructor(executeInput, watch = true) {
    this.readerLine = "";
    this.cursorPosition = 0;
    const logKey = (e) => {
      if (watch) {
        if (e.key == "Enter") {
          executeInput(this.readerLine);
          console.log("enter pressed");
          this.readerLine = "";
          this.cursorPosition = 0;
        } else {
          switch (e.key) {
            case "Space":
              this.readerLine += " ";
              this.cursor.position++;
              break;
            case "Alt":
            case "Shift":
            case "Control":
            case "Tab":
            case "AltGraph":
            case "Backspace":
              if (this.cursorPosition > 0) {
                this.cursorPosition--;
                console.log(this.readerLine);
                let backspaced = this.readerLine.substring(
                  0,
                  this.readerLine.length - 1
                );
                this.readerLine = backspaced;
              }
              break;

            default:
              this.readerLine += e.key;
              this.cursorPosition++;
          }

          console.log(this.readerLine);
        }
      }
    };
    console.log("starting reader");
    this.watch = watch;
    this.input = document.querySelector(".terminal-input");
    if (this.input) {
      console.log("input found adding event listenner");
      this.input.addEventListener("keydown", logKey);
    } else {
      console.log("input not found to start the reader");
    }
  }
}

export default InputReader;
