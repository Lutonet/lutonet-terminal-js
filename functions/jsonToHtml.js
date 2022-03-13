const convert = (text) => {
  let outputString = "";
  let isNewLine = true;
  let space = 0;
  const addSpaces = (spaces) => {
    let output = "";
    if (spaces > 0) {
      for (let i = 1; i <= spaces; i++) output += "&nbsp;";
    }
    return output;
  };
  for (let index = 0; index < text.length; index++) {
    let char = text[index];
    switch (char) {
      case "[":
        index == 0
          ? (outputString += char)
          : (outputString += addSpaces(space) + char);
        space += 2;
        break;
      case "{":
        index == 0
          ? (outputString += char)
          : (outputString += addSpaces(space) + char);
        space += 2;
        break;
      case "]":
        space -= 2;
        outputString += addSpaces(space) + char;
        isNewLine = true;
        break;
      case "}":
        space -= 2;
        outputString += addSpaces(space) + char + "<br>";
        isNewLine = false;
        break;
      case ",":
        if (outputString[index - 1] == ">") {
          outputString = outputString.slice(0, -4);
        }
        outputString += char + "<br>";
        isNewLine = true;
        break;
      default:
        if (isNewLine) {
          outputString += addSpaces(space) + char;
          isNewLine = false;
        } else {
          outputString += char;
        }
    }
  }
  console.log(outputString);
  return outputString;
};
export default convert;
