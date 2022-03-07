function getDefaultSettings() {
  light = {
    backgroundColor: "#CCCCCC",
    defaultColor: "#090909",
    errorColor: "#990000",
    infoColor: "#1133AA",
    successColor: "#119911",
    invertedText: "#FFFFFF",
  };

  dark = {
    backgroundColor: "#090909",
    defaultColor: "#CCCCCC",
    errorColor: "#990000",
    infoColor: "#1133AA",
    successColor: "#119911",
    invertedText: "#FFFFFF",
  };

  defaultSettings = {
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
