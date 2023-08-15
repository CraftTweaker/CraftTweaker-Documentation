::since{version=4.0.0}
# JeiIngredient

Represents the ZenCode counterpart to an ingredient that shows up in the JEI ingredient panel.

 For context, the JEI ingredient panel is the list of ingredients visible by default on the right side of the
 screen in any container.

 Most valid types can be automatically converted to instances of this class in ZenCode scripts, so no manual
 conversion nor particular care is required on the scriptwriter part. Nevertheless, if manual conversions are desired,
 then refer to the other classes available in this package.

 <strong>Integration writers</strong>, on the other hand should ever operate with instances of this class outside
 of the ZenCode script interoperability interface, preferring the unwrapped `JeiIngredient` class: fast wrapping
 and unwrapping methods are provided through the `JeiIngredients` class.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.jeitweaker.ingredient.JeiIngredient;
```


## Implemented Interfaces
JeiIngredient implements the following interfaces. That means all methods defined in these interfaces are also available in JeiIngredient

- [CommandStringDisplayable](/vanilla/api/bracket/CommandStringDisplayable)

## Methods

:::group{name=getCommandString since="4.0.0"}

Return Type: string

```zenscript
// JeiIngredient.getCommandString() as string

myJeiIngredient.getCommandString();
```

:::


## Properties

|     Name      |  Type  | Has Getter | Has Setter |
|---------------|--------|------------|------------|
| commandString | string | true       | false      |

