# Class WindowOperator

This class cares about the **Terminal output** - most of its important methods are imported by the [Terminal](./Terminal.md) class

Uses classes:

> - [Terminal](./Terminal.md)
> - [Json](./Json.md)

**This class is automatically used by the Terminal class and can be accessed as its property `terminal.windowOperator`**

## WindowOperator properties and methods

_Mostly just for informational purpose as class is not meant to be used outside of this package_

### Constructor

class is instanced inside the Terminal class and should not be used without it.

### Properties

`screen` Property which represents the DOM element where data are being written

rest of properties is defined inside the Terminal class itself - those are used for styling of the Window

### Methods

**Public methods are all importent and directly use with the same name in the Terminal class where they are described**

`write(string)`,
`writeLine(string)`,
`writeError(string, title)`,
`writeInfo(string, title)`,
`writeSuccess(string, title)`,
`writeHTML(string)`,
`writeJSON(string)`
_TO DO_ `writeHTMLSource(string)`
