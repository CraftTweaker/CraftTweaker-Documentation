# Basic variable functionality

The most basic variable types of ZenScript are Strings, integers and booleans.

## Most single types
`true == true` You can check if two values are the same.  
`"Hello" != "World"` You can also check if two values are unequal.

## Strings
Strings provide some functionality

`"Hello".length` Returns the string's length as int.  
`"Hello"[1]` Returns the character at the string's given index as another string.  
`"Hello" in "Hell"` checks if the string before `in` contains the string after it as boolean.  
`"Hel" ~ "lo " + "World"` You also can add/concatenate strings.
`string += "assignAdd"` you can also use the assignAdd/assignConcatenate operators.

## Integers
Integers provide some functionality
`+-*/%` Basic mathematic operators (check the variable Types page). You can also use the operatorAssign tokens  
`0 to 10` Returns an integer Range ranging from 0 to 10.  
`1~10` Concatenates the integers (returns "110").  


## Booleans
Booleans provide some functionality
`true ~ false` Concatenates the booleans (returns "truefalse").  
`& | ^` Boolean operators (and/or/xor).  

## Arrays/ArrayLists
Arrays and ArrayLists provide common functions
`array[1]` returns the item at the given index.  
`array[1] = "Hello"` Sets the item at the given index.  
`array.length` returns the arrays length
