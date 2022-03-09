import Terminal from "./Terminal.js";
const terminal = new Terminal({ terminalType: "as-400" });

terminal.start();
terminal.displayTitle = true;
terminal
  .readLine("Enter testing data")
  .then((data) => terminal.writeSuccess(data));
