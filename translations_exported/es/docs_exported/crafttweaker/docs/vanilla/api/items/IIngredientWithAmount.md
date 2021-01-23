# IIngredientWithAmount

Consists of an ingredient and an amount.

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.IIngredientWithAmount;
```


## Implemented Interfaces
IIngredientWithAmount implements the following interfaces. That means all methods defined in these interfaces are also available in IIngredientWithAmount

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
## Properties

| Name       | Type                                          | Has Getter | Has Setter |
| ---------- | --------------------------------------------- | ---------- | ---------- |
| amount     | int                                           | true       | false      |
| ingredient | [IIngredient](/vanilla/api/items/IIngredient) | true       | false      |

