import Terminal from "./Terminal.js";
const terminal = new Terminal({ terminalType: "as-400" });
terminal.start();
terminal.theme = "dark";
terminal.defaultColor = "green";
/*{
  display: true,
  displayTitle: false,
});
*/
console.log(terminal.theme);
