import Terminal from "./Terminal.js";
const terminal = new Terminal({ terminalType: "as-400" });
terminal.theme = "dark";
terminal.start();
terminal.displayTitle = true;
terminal.writeLine(new Date());

terminal.readLine("Enter testing data").then((data) => {
  terminal.writeSuccess(data);
  terminal.readKey("Press any key").then((data) => {
    terminal.writeInfo("Pressed key " + data);
    terminal
      .readKey("Are you sure?", ["y", "n"])
      .then((data) =>
        data == "y" || data == "Y"
          ? terminal.writeSuccess("Confirmed")
          : terminal.writeError("Declined")
      );
  });
});
