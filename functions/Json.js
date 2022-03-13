/* JSON class with functions to format text for terminal in JSON  */

class Json {
  constructor() {
    this.defaultColors = {
      text: "#6666ff",
      level0: "#aa4400",
      level1: "#aaaa00",
      level2: "#66aa00",
      level3: "#444488",
      level4: "#884488",
      level5: "#882244",
    };
    if (!props) props = {};
    this.useColors = true;
    this.useOwnColors = false;
    this.ownColors = false;
    this.actualColors = this.defaultColors;
    this.response = {
      success: true,
      data: "",
    };
    this.spaces = 2;
  }

  /********** Getters and Getters **********/

  get defaultColors() {
    return this._defaultColors;
  }
  set defaultColors(value) {
    this._defaultColors = value;
  }

  get useColors() {
    return this._useColors;
  }
  set useColors(value) {
    this._useColors = value;
    this.loadColorProfile();
  }

  get useOwnColors() {
    return this._useOwnColors;
  }
  set useOwnColors(value) {
    this._useOwnColors = value;
    this.loadColorProfile();
  }

  get ownColors() {
    return this._ownColors;
  }
  set ownColors(value) {
    this._ownColors(value);
    this.loadColorProfile();
  }

  get spaces() {
    return this._spaces;
  }
  set spaces(value) {
    this._spaces = value;
  }

  loadColorProfile() {
    if (this.useColors) {
      if (this.useOwnColors) {
        this.actualColors = this.defaultColors;
        for (let color in this.ownColors) {
          this.actualColors[color] = this.ownColors[color];
        }

        this.actualColors = this.defaultColors;
      } else this.actualColors = this.defaultColors;
    }
  }

  minimize(json) {
    let jsonArray = json.split(/\r?\n/);
    jsonArray = jsonArray.map((line) => line.trim());
    let result = "";
    jsonArray.forEach((res) => (result += res));
    return result;
  }

  humanize(js) {
    let json = this.minimize(js);
    let result = "";
    let level = 0;
    for (let i = 0; i < json.length; i++) {
      switch (json[i]) {
        case "{":
          result += json[i];
          level += 1;
          result += "\n" + this.getSpaces(level);
          break;
        case "[":
          result += json[i];

          json[i + 1] === "{"
            ? () => {}
            : (result += "\n" + this.getSpaces(level));
          break;
        case ",":
          result += json[i] + "\n" + this.getSpaces(level);
          break;
        case "]":
          if (json[i - 1] != "}") {
            result += "\n";
            //level--;
            result += this.getSpaces(level);
          }
          if (json[i + 1] == ",") {
            result += json[i];
          } else {
            if (json[i - 1] == "}")
              result += json[i] + "\n" + this.getSpaces(level);
            else {
              result += json[i] + "\n" + this.getSpaces(level);
            }
          }
          break;
        case "}":
          level -= 1;
          if (i != json.length - 1) result += "\n" + this.getSpaces(level);
          else result = result.slice(0, -this.spaces);
          if (
            json[i + 1] == "," ||
            json[i + 1] == "]" ||
            i == json.length - 1
          ) {
            result += json[i];
          } else {
            if (i != json.length - 1) {
              result += "\n";
              result += "\n" + this.getSpaces(level);
            } else {
              level = 0;
            }
            this.getSpaces(level) + json[i];
          }

          break;
        default:
          result += json[i];
          break;
      }
    }
    return result;
  }

  getSpaces = (level) => {
    let outcome = "";
    for (let j = 1; j <= level * this.spaces; j++) {
      outcome += " ";
    }
    return outcome;
  };

  getHtml = (json) => {
    let res = this.humanize(json);
    let theJson;
    let result = `<div class='terminal-json'>`;
    if (res) {
      theJson = res;
      for (let i = 0; i < theJson.length; i++) {
        switch (theJson[i]) {
          case " ":
            result += "&nbsp";
            break;
          case "\n":
            result += "<br>";
          default:
            result += theJson[i];
        }
      }
      this.response.success = true;
      this.response.data = result + "</div>";
      console.log(this.response);
      if (this.useColors && this.response.success) {
        this.response = this.colorizeHtmlJson(this.response.data);
      }
      return this.response;
    } else return this.response;
  };

  colorizeHtmlJson = (json) => {
    this.loadColorProfile();
    console.log(this.actualColors);
    let result = "";
    let inQuotes = false;
    const { text, level1, level2, level3, level4, level5 } = this.actualColors;

    let level = 1;
    for (let char = 0; char < json.length; char++) {
      const actualCharacter = json[char];

      switch (actualCharacter) {
        case "{":
          console.log(level);
          result += this.startSpan(level);
          result += actualCharacter;
          result += this.endSpan();
          level++;
          break;
        case "[":
          result += this.startSpan(level);
          result += actualCharacter;
          result += this.endSpan();
          break;
        case '"':
          if (inQuotes) {
            result += actualCharacter;
            result += this.endSpan();
            inQuotes = false;
          } else {
            result += this.startSpan();
            result += actualCharacter;
            inQuotes = true;
          }
          break;
        case "}":
          level--;
          result += this.startSpan(level);
          result += actualCharacter;
          result += this.endSpan();
          break;
        case "]":
          result += this.startSpan(level);
          result += actualCharacter;
          result += this.endSpan();

          break;
        default:
          result += actualCharacter;
      }
    }
    return result;
  };

  startSpan = (level) => {
    let color = "";
    if (level) {
      color = "level" + level;
    } else {
      color = "text";
    }
    return `<span style='color: ${this.actualColors[color]}'>`;
  };

  endSpan = () => {
    return "</span>";
  };
}
export default Json;
