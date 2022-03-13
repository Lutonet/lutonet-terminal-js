# Class InputReader

This class cares about the **Terminal input** - most of its important methods are imported by the [Terminal](./Terminal.md) class

Uses classes:

> - [Terminal](./Terminal.md)

**This class is automatically used by the Terminal class and can be accessed as its property `terminal.windowOperator`**

## InputReader properties and methods

_Mostly just for informational purpose as class is not meant to be used outside of this package_

### Constructor

class is instanced inside the Terminal class and should not be used without it.

### Properties

`prompt` DOM element representing SPAN in the command line where is the prompt displayed
`input` DOM element representing INPUT in which user puts data

### Methods

**Public methods are all importent and directly use with the same name in the Terminal class where they are described**

`*promise* read(prompt, keys)`,
`*promise* readLine(prompt)`
