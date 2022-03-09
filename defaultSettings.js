function getDefaultSettings() {
  const light = {
    backgroundColor: "#CCCCCC",
    defaultColor: "#090909",
    dimmedColor: "#555555",
    errorColor: "#AA0000",
    infoColor: "#1133AA",
    successColor: "#11aa11",
    invertedText: "#FFFFFF",
  };

  const dark = {
    backgroundColor: "#090909",
    defaultColor: "#CCCCCC",
    dimmedColor: "#999999",
    errorColor: "#BB1111",
    infoColor: "#1133DD",
    successColor: "#119911",
    invertedText: "#FFFFFF",
  };

  const defaultSettings = {
    element: "#terminal",
    terminalType: "as-400",
    theme: "light",
    cursor: "_",
    commandPrefix: ">",
    cursorShow: true,
    cursorFlashing: "slow",
    displayLogs: false,
    displayTitle: false,
    titleInverted: false,
    title: "",
    backgroundColor: light.backgroundColor,
    defaultColor: light.defaultColor,
    errorColor: light.errorColor,
    infoColor: light.infoColor,
    successColor: light.successColor,
    invertedText: light.invertedText,
  };
  return { defaultSettings, light, dark };
}

export default getDefaultSettings;
