# TriState

Represents a value that can assume three values, instead of a simple boolean that can only assume two values.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.TriState;
```


## Enum Constants

TriState is an enum. It has 3 enum constants. They are accessible using the code below.

```zenscript

// The true value of the TriState.
// 
// It can be considered the same as a boolean's 'true' value.
TriState.TRUE

// The false value of the TriState.
// 
// It can be considered the same as a boolean's 'false' value.
TriState.FALSE

// The unset value of the TriState.
// 
// It represents the lack of a state or a decision that hasn't been made yet.
TriState.UNSET
```
