import Terminal from "./Terminal.js";
const terminal = new Terminal({ terminalType: "as-400" });
terminal.start();
terminal.theme = "dark";
terminal.displayTitle = true;
terminal.writeLine("Hello world");
terminal.writeLine("Here is another line");
terminal.writeError("Can't read the file");
terminal.writeInfo("Some information");
terminal.writeSuccess("Something completed");
/*{
  display: true,
  displayTitle: false,
});
*/
