# Class Terminal

This is a **main class** of the project which only needs to be included when using this class library.

Included classess are:

- [WindowOperator](./WindowOperator.md)
- [InputOperator](./InputOperator.md)
- [TerminalShell](./TerminalShell.md)
- [Json](./Json.md)

## Basic JS Terminal properties and methods

### Properties:

`element` _string_ needs the HTML element Id or className or Tag i.e. `#terminal` or `.myterminal`. **default** `#terminal`

`terminalType` _string_ ['as-400', 'logger'] **default** `as-400`

- `as-400` terminal is a read only, with command prompt located below the terminal similar to IBM AS-400 series

- `logger` terminal is fully read only - to display output for user or developer if used as a logger

`theme` _string_ ['dark','light','custom] **default** `light`

Selected theme sets up properties `{ background-color, text-color, dimmed-color, error-color, info-color, success-color, inverted-text }` to predefined values - if you want to use your own colors you can manually assign some of those properties.

If you want to use all your own colours, select the 'custom' here

`cursor` _string_ **default** `_` Decides which type of the cursor will be displayed - use any symbol you like where most common are `> $ and _`

`commandPrefix` _string_ **default** `>` Decides which symbol will be displayed at the beginning of the command line (line where is the cursor placed)

`displayLogs` _boolean_ **default** `false`

Decides if the logger will listen to logs and display them

`displayTitle` _boolean_ **default** `false`

Decides if terminal will display text with the type of message ie `Error` will be written at the start of the message

`titleInverted` _boolean_ **default** `false`

Decides if the terminal will display Title word inverted (for example Error would be white font on red background - followed by normal colors for an error element)

**Theming properties**

- `backgroundColor` _string_ defines the terminal background color
- `fontFamily` _string_ defines the terminal font family
- `defaultColor` _string_ defines the terminal default font color
- `dimmedColor` _string_ defines the terminal font color used for less important info
- `errorColor` _string_ defines the text color for error type of message
- `infoColor` _string_ defines the text color for information message
- `successColor` _string_ defines the text color for the successful message
- `invertedText` _string_ defines the text color for inverted messages in logger

---

### Methods:

`clear()` clears the console

`write(string)` displays given string with the default font color. Cursor stays after last character in the line

`writeLine(string)` displays given string with the default font color. Cursor goes to the beginning of the next line

`writeError(string, title)` like `writeLine(string)` styled as error - can diplay a `title` before message

`writeInfo(string, title)` like `writeLine(string)` styled as information - can diplay a `title` before message not

`writeSuccess(string, title)` like `writeLine(string)` styled as success - can diplay a `title` before message

`writeHTML(html)` renders HTML code in the console - css most likely not applied

`writeJSON(json)` renders JSON beautified a bit if possible on the console

`read(question, keys)` _promise_ returns char when user presses any key on the command line. String with `question` will be displayed on the command line before the terminal symbol. Parameter `keys` can specify valid keys - other pressed keys will be ignored.
example: `terminal.read('Do you agree?',['y','n'])`

`readLine(question)` _promise_ returns string when user hits enter with all he typed

## Logger methots

_To Do_

## Terminal commands

`clear` cleans the screen
