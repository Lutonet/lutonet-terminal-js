import Terminal from "./Terminal.js";
import convert from "./functions/jsonToHtml.js";
const terminal = new Terminal({ terminalType: "as-400" });
terminal.theme = "dark";
terminal.start();
terminal.displayTitle = true;
