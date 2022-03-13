# Class Json

This class cares about **Json functions and rendering** - most of its important methods are imported by the [Terminal](./Terminal.md) class

Uses classes:

> - [Terminal](./Terminal.md)

**This class is automatically used by the Terminal class and can be accessed as its property `terminal.json`**

## Json properties and methods

Properties are used to change, enable or disable colors

### Constructor

class is instanced inside the Terminal class and should not be used without it. Constructor loads default settings and sets up usuage of colors to `true`

### Properties

`defaultColors` _object_ representing default system colors - object has 6 members :

- `text`, which is used as default color for text inside parentesis
- `level1 - level5`, each handles value of the color #xxxxxx for different level of brackets
  **Property has getter and setter**

`useColors` _boolean_ representing if output should be colorful _default `true`_ **Property has getter and setter**

`useOwnColors` _boolean_ representing if output should use own colors _default `false`_ **Property has getter and setter**
**Method requests to set own colors**

`ownColors` _object_ representing user defined colors

`actualColors` _object_ representing colors actually used by the system

`spaces` _integer_ representing amount of spaces used for each level _(default 2)_

### Methods

**Public methods are all importent and directly use with the same name in the Terminal class where they are described**

`loadColorProfile()` - method is authomatically called when color properties are changed

`minimize(json)` returns single lined JSON
`humanize(json)` returns JSON string written in "readable form"
`getHtml(json)` returns HTML formated JSON string
