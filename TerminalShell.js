export default class TerminalShell {
  constructor(terminal, shells) {
    this.shells = shells;
    this.activateNext = false;
    this.terminal = terminal;
    if (!terminal) {
      console.log("no terminal element was received in the constructor");
      return;
    }
  }

  execute(command) {
    let data = command.split(" ");
    if (data.length === 0) {
      console.log("empty command");
      data = data.map((arg) => arg.trim());
    }
    let blockDefault = false;
    if (this.shells) {
      this.shells.forEach((shell) => {
        if (shell.blockDefault) blockDefault = true;
        shell.execute(command);
      });
    }
    if (!blockDefault) {
      switch (data[0].toLowerCase()) {
        case "":
          break;

        case "clear":
          this.terminal.clear();
          break;

        case "test":
          this.terminal.clear();
          this.terminal.writeLine("Actuall date: " + new Date());
          this.terminal.readLine("Enter testing data").then((data) => {
            this.terminal.writeSuccess("Data Entered: " + data);
            this.terminal.writeLine();
            this.terminal.readKey("Press any key").then((data) => {
              this.terminal.writeInfo("Pressed key " + data);
              this.terminal.writeLine();
              this.terminal
                .readKey("Are you sure?[y/n]", ["y", "n"])
                .then((data) =>
                  data == "y" || data == "Y"
                    ? this.terminal.writeSuccess("Confirmed")
                    : this.terminal.writeError("Declined")
                )
                .then(() => {
                  let htmlTest = `<table style="align: center; background-color: '#444488'; border: '1px solid'">
                                    <tr>
                                      <th colspan='2' style='align: center;'> This is HTML table
                                      </th>
                                    <tr>
                                      <td style = "align: center, color: '#888888'"> column 1</td>
                                      <td style = "align: center, color: '#888822'"> column 2</td>
                                    <tr>
                                  </table>`;
                  this.terminal.writeLine();
                  this.terminal.writeHTML(htmlTest);
                  let json = `{"id":3,"user":{"name":"Bites","surName":"Gills"},"cars":["Audi","BMW"]}`;
                  this.terminal.json.useOwnColors = true;
                  this.terminal.json.ownColors = { text: "#777788" };
                  this.terminal.writeJSON(json);
                  this.terminal.json.useOwnColors = false;
                });
            });
          });
          break;

        case "help":
          if (data.length > 1)
            switch (data[1].toLowerCase()) {
              case "--ver":
              case "version":
            }
          this.terminal.writeLine("Help: ");
          this.terminal.writeLine("");
          break;

        case "switchtheme":
          if (data.length === 1) {
            console.log(this.terminal.theme);
            this.terminal.theme =
              this.terminal.theme === "light" ? "dark" : "light";
            console.log("switching theme");
          } else {
            this.terminal.theme = data[1];
          }
          break;
        default:
          if (this.activateNext) {
          }
          this.terminal.writeError("Command not found");
      }
    }
  }
}
