# lutonet-terminal-js

**Hello guys**

Thank you for your kind interest in this little class.
Please don't beat me much as it is my first published code in a bit modern JS

_Terminal-js_ should provide some nice functionalities helpful for website development and testing

The usage should be very universal and simple (importing the Class - create the instance and use it) and also highly customizable

Terminal supports two different modes

- **logger** is a read only terminal
- **as-400** terminal is divided to bottom command line and the display above it.

As an as-400 terminal it allows to read user input and get its value to use for triggering different functions

## terminal supports following functions:

**Display informations**

- display string
- display line
- display **successfull** message
- display **informational** message
- display **successfull** message
- display **html formated code**
- display **JSON** formated source code **with coloured brackets** _[colors are optional]_

For all details is possible to define own colors and styles

**Read informations**

- read line and call the callback function passing it this character
- read single character and call the callback function passing it this character
- read single character from selected range - call callback when one of characters in range is pressed

**Shell**

- command prompt like shell allowing basic function (display test, clear console, display help)
- import one or more of shellObjects which can work like middleware and add different functionalities to the terminal.
