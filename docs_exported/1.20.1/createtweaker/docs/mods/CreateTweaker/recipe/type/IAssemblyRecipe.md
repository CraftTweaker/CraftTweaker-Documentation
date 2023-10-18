# IAssemblyRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.createtweaker.IAssemblyRecipe;
```


## Methods

:::group{name=supportsAssembly}

Does this recipe support being used in assembly processing.

Returns: True if it is supported. False otherwise.  
Return Type: boolean

```zenscript
// IAssemblyRecipe.supportsAssembly() as boolean

myIAssemblyRecipe.supportsAssembly();
```

:::


## Properties

|       Name       |  Type   | Has Getter | Has Setter |                         Description                         |
|------------------|---------|------------|------------|-------------------------------------------------------------|
| supportsAssembly | boolean | true       | false      | Does this recipe support being used in assembly processing. |

