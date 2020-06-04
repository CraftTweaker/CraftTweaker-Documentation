# IMatchValidator

## Importing the Package

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zencode
import mods.gregtech.multiblock.IMatchValidator;
```

## Information

IMatchValidator can be used for matching either a layer, or the whole multiblock.

They are used internally by GregTech for the _Distillation Tower_, to ensure that each
layer contains exactly one fluid output hatch.

## Calling an IMatchValidator
There is only one way to obtain an IMatchValidator,

* Define your own using [Custom Functions](../../../AdvancedFunctions/Custom_Functions.md).

Okay, I lied, you can also use the boolean operators mentioned below.

## ZenMethods
### Instance Methods
Since `IMatchValidator`s are predicates, there are some basic methods included for chaining them.

| ZenMethod                                    | Return Type                           | Description                                                                    |
|----------------------------------------------|---------------------------------------|--------------------------------------------------------------------------------|
| `IMatchValidator#or(IMatchValidator)`        | [`IMatchValidator`](#IMatchValidator) | an `IMatchValidator` that returns true if either of those given return `true`. |
| `IMatchValidator#and(IMatchValidator)`       | [`IMatchValidator`](#IMatchValidator) | an `IMatchValidator` that returns true if both of those given return `true`.   |
| `IMatchValidator#negate()`                   | [`IMatchValidator`](#IMatchValidator) | an `IMatchValidator` that returns true if the one given returns `false`.       |
| `IMatchValidator#test(IBlockWorldState)`     | `bool`                                | what the matcher returns when called                                           |

These can also be applied with the operators, `||`, `&&`, `!` and `in` respectively.
