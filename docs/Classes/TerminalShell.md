# Class TerminalShell

This class cares about the **Terminal output** - most of its important methods are imported by the [Terminal](./Terminal.md) class

Uses classes:

> - [Terminal](./Terminal.md)

**This class is automatically used by the Terminal class and can be accessed as its property `terminal.shell`**

## TerminalShell properties and methods

_Mostly just for informational purpose as class is not meant to be used outside of this package_

### Constructor

`constructor (terminal, shells)`

class is instanced inside the Terminal class and should not be used without it.
constructor takes two parameters first is `Terminal` class instance
second should be array of `CustomShell` classes

### Properties

N/A

### Methods

N/A

### Included commands

`clear` - clears the console
`help` - shows help
`test` - shows basic testing operations
`switchTheme` - toggles the theme
`switchTheme string` - toggles the theme to `string`
