# Class CustomShell

This is an **example** CustomShell class which can be addedd as a property to the InputShell class and which can expand amount of commands and tasks done by shell. TerminalShell adds each CustomShell class to the middleware. Class has ability to disable default shell (if replacing some its commands);

Uses classes:

> - [Terminal](./Terminal.md)

**This class is used by the Terminal class to add new commands to the shell**

## CustomShell properties and methods

`blockDefault` **boolean** decides is the system shell is blocked _default false_
`terminal` instance of the terminal class

### Constructor

`constructor (terminal)`

**Example**
`
class CustomShell {
constructor(terminal) {
this.blockDefault = true;
this.terminal = terminal;
if(!this.terminal) {
console.log('Error');
break;
}
// some code
}

`

### Properties

N/A

### Methods

**Mandatory**

`execute(command)` inside this method should case statement with empty default part which will run commands given. Of course it is possible to analyze parameters as whole user input is passed to the class
