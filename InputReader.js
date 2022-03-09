import safeText from "./functions/safeText.js";
class InputReader {
  constructor(executeInput, watch = true) {
    this.readerLine = "";
    let cursorPosition = 0;
    const logKey = (e) => {
      if (watch) {
        /* define different actions for functional keys */
        if (e.key == "Enter") {
          executeInput(safeText(this.readerLine));
          console.log("enter pressed");
          this.readerLine = "";
          cursorPosition = 0;
        } else {
          switch (e.key) {
            case "Space":
              this.readerLine += " ";
              cursorPosition++;
              break;
            case "Alt":
            case "Shift":
            case "Control":
            case "Tab":
            case "AltGraph":
            case "Insert":
            case "PageUp":
            case "PageDown":
            case "ArrowUp":
              cursorPosition = 0;
              break;
            case "ArrowDown":
              cursorPosition = this.readerLine.length;
              break;
            case "ArrowLeft":
              if (cursorPosition > 0) cursorPosition--;
              break;
            case "ArrowRight":
              if (cursorPosition < this.readerLine.length) cursorPosition++;
              break;
            case "Home":
              if (cursorPosition > 0) cursorPosition--;

              break;
            case "End":
              cursorPosition = this.readerLine.length;
              break;
            case "Backspace":
              if (cursorPosition > 0) {
                if (cursorPosition == this.readerLine.length) {
                  let backspaced = this.readerLine.slice(0, -1);
                  cursorPosition--;
                  this.readerLine = backspaced;
                } else {
                  let beginning = this.readerLine.slice(0, cursorPosition - 1);
                  let end = this.readerLine.slice(
                    cursorPosition,
                    this.readerLine.length
                  );
                  cursorPosition--;
                  this.readerLine = beginning + end;
                }
              }
              break;
            case "Delete":
              if (cursorPosition < this.readerLine.length) {
                let start = this.readerLine.slice(0, cursorPosition);
                let end = this.readerLine.slice(
                  cursorPosition + 1,
                  this.readerLine.length
                );
                this.readerLine = start + end;
              }
              break;
            default:
              if (e.key.length === 1) {
                if (cursorPosition == this.readerLine.length) {
                  this.readerLine += e.key;
                  cursorPosition++;
                } else {
                  let start = this.readerLine.slice(0, cursorPosition);
                  let end = this.readerLine.slice(
                    cursorPosition,
                    this.readerLine.length
                  );

                  start += e.key;
                  this.readerLine = start + end;
                }
              }
          }
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
