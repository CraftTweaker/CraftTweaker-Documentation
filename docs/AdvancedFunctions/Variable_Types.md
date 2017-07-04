# Variable Types

As you surely already messed a bit with variables and values, you must've wondered, how CraftTweaker knows whether it's dealing with an integer, an Item or an oreDic entry?

The easiest way of declaring a variable is using ```var name = value;```. 
This  creates the variable and casts it to the value it thinks is most fitting for the situation.

## Casting a variable to a specific type

More complex scripts might require you to cast a variable as a specific type.
For example, this would fail:

```
var test;

test = <minecraft:dirt>;
recipes.remove(test);
```

So why does this fail?
This is because CT casts variables that aren't given a start value to the IAny Type.
That type was made to facilitate some recipe handlers, though never really implemented, so it sometimes does more harm than good. It was originally intended as a type that can take the form of most other types so you don't need to change variables all the time, but the interface never got implemented.

Back to the topic:
How can we fix this issue? By casting the variable test to ```IItemStack```, which is the type used for items.
Unfortunately, some types need to be imported first, and this is one of those.

```
import minetweaker.item.IItemStack;
var test as IItemStack;

test = <minecraft:dirt>;
recipes.remove(test);
```

## List of Variable Types

Here's an (incomplete) List of most variable types

| Name (Name in CT)         | Explanation                                                                                             | Example                                      | Import                                  |
|---------------------------|---------------------------------------------------------------------------------------------------------|----------------------------------------------|-----------------------------------------|
| Integer (int)             | Integers are whole Numbers (e.g. 1,2,3,...), caps at 2 147 483 647                                      | var test = 10 as int;                        |                                         |
| IItemStack                | Single items                                                                                            | var test = <minecraft :dirt> as IItemStack;  | import minetweaker.item.IItemStack;     |
| Iingredient               | Single or Multiple Items (e.g. <minecraft:dirt>, <ore:ingotIron>,...)                                   | var test = <minecraft :dirt> as Iingredient; | import minetweaker.item.IIngredient;    |
| Boolean (bool)            | Booleans are either true or false.                                                                      | var test = false as bool;                    |                                         |
| Byte (byte)               | Bytes values are whole numbers from 0 to 255 ()                                                         | var test = 125 as byte;                      |                                         |
| Floating Point (float)    | Decimals                                                                                                | var test = 1.25 as float;                    |                                         |
| Double Precision (double) | Like Floating Points, just more precise and with a higher number range                                  | var test = 1.25 as double;                   |                                         |
| Long (long)               | Like Integer, but with a higher number range (usually int is just fine)                                 | var test = 30 as long;                       |                                         |
| Null (null)               | Null, nothing, nada. Not really a type but still useful                                                 | var test = null;                             |                                         |
| Short (short)             | Like Integer, but with a smaller number Range                                                           | var test = 16 as short;                      |                                         |
| String (string)           | A string is a text. Here you usually won't need the "as" as anything in "s is automatically a string.   | var test = "Hello World!" as string;         |                                         |
| Void (void)               | Even less than null. You will probably only need the void type when dealing with functions              | var test as void;                            |                                         |
| ILiquidStack              | Same as IItemStack, only for liquids                                                                    | var test = <liquid:water> as ILiquidStack;   | import minetweaker.liquid.ILiquidStack; |
