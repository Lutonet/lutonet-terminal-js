import Terminal from "./Terminal.js";
const terminal = new Terminal({});
terminal.theme = "dark";
terminal.start();

/*{
  display: true,
  displayTitle: false,
});
*/
console.log(terminal.theme);
