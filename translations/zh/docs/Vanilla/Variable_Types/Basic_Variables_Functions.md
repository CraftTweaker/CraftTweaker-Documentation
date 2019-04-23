# Basic variable functionality

The most basic variable types of ZenScript are Strings, Integers and booleans.

## Most single types

`true == true` You can check if two values are the same.  
`"Hello" != "World"` You can also check if two values are unequal.

## Strings

Strings provide some functionality

`"Hello".length` Returns the string's length as int.  
`"Hello"[1]` Returns the character at the string's given index as another string.  
`"Hello" in "Hell"` checks if the string before `in` contains the string after it as boolean. You can replace the `in` with `has` if you like that better.  
`"Hel" ~ "lo " + "World"` You also can add/concatenate strings. `string += "assignAdd"` you can also use the assignAdd/assignConcatenate operators.

Aside from these, all methods that are available to [Java Strings](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) and do not use the `char` type are also available to ZenScript strings!  
This includes:

- toLowerCase
- toUpperCase
- getBytes
- hashCode
- intern
- isEmpty
- toCharArray
- trim
- split

## Integers

Integers provide some functionality

`+-*/%` Basic mathematic operators (check the [variable Types](Variable_Types) page). You can also use the operatorAssign tokens  
`0 to 10` Returns an Integer Range ranging from 0 to 10.  
`1~10` Concatenates the Integers (returns "110").

## Booleans

Booleans provide some functionality

`true ~ false` Concatenates the booleans (returns "truefalse").  
`& | ^` Boolean operators (and/or/xor).

## Arrays/ArrayLists

Arrays and ArrayLists provide common functions

`array[1]` returns the item at the given index.  
`array[1] = "Hello"` Sets the item at the given index.  
`array.length` returns the arrays length