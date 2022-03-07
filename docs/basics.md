# Basic JS Terminal properties and methods

### Properties:

**element** _string_ needs the HTML element Id or className or Tag i.e. `#terminal` or `.myterminal`. **default** `#terminal`

**terminal-type** _string_ ['as-400', 'logger', 'terminal] **default** `as-400`

- **as-400** terminal is a read only, with command prompt located below the terminal similar to IBM AS-400 series

- **logger** terminal is fully read only - to display output for user or developer if used as a logger

- **terminal** read/write terminal window should behave similar way to common terminal applications like windows cmd - can display different outputs to user and also read inputs from the user

**theme** _string_ ['dark','light','custom] **default** `light`

Selected theme sets up properties `{ background-color, text-color, dimmed-color, error-color, info-color, success-color, inverted-text }` to predefined values - if you want to use your own colors you can manually assign some of those properties.

If you want to use all your own colours, select the 'custom' here

**cursor** _string_ **default** `_` Decides which type of the cursor will be displayed - use any symbol you like where most common are `> $ and _`

**command-prefix** _string_ **default** `>` Decides which symbol will be displayed at the beginning of the command line (line where is the cursor placed)

**cursor-show** _boolean_ **default for terminal and as-400** `true` **for logger** `false`

If set to false cursor will not be displayed. This is default settings

**cursor-flashing** _string_ ['slow','fast','off']**default** `off`

Decides if cursor will be flashing slowly, fast or if it will be still on

**display-logs** _boolean_ **default** `false`

Decides if the logger will listen to logs and display them

**display-title** _boolean_ **default** `false`

Decides if terminal will display text with the type of message ie `Error` will be written at the start of the message

**display-title-inverted** _boolean_ **default** `false`

Decides if the terminal will display Title word inverted (for example Error would be white font on red background - followed by normal colors for an error element)

**title** _string_ **default** ''

**Theming properties**

- **background-color** _string_ defines the terminal background color
- **font-family** _string_ defines the terminal font family
- **default-color** _string_ defines the terminal default font color
- **error-color** _string_ defines the text color for error type of message
- **info-color** _string_ defines the text color for information message
- **success-color** _string_ defines the text color for the successful message
- **inverted-text** _string_ defines the text color for inverted messages in logger

---

### Methods:

`clear()` clears the console

`write(string)` displays given string with the default font color. Cursor stays after last character in the line

`writeLine(string)` displays given string with the default font color. Cursor goes to the beginning of the next line

`writeErrorLine(string)` like `writeLine(string)` styled as error - can diplay a `title` before message

`writeInfoLine(string)` like `writeLine(string)` styled as information - can diplay a `title` before message not

`writeSuccessLine(string)` like `writeLine(string)` styled as success - can diplay a `title` before message

`writeError(string)` like `write(string)` styled as error - can diplay a `title` before message

`writeInfo(string)` like `write(string)` styled as information - can diplay a `title` before message not

`writeSuccess(string)` like `write(string)` styled as success - can diplay a `title` before message

`read()` returns char when user press any key on the command line

`readLine()` returns string when user hits enter with all he typed

## Logger methots

_To Do_
