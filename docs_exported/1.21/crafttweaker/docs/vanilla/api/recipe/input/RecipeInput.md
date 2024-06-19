# RecipeInput

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.input.RecipeInput;
```


## Methods

:::group{name=getItem}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
RecipeInput.getItem(slot as int) as IItemStack
```

| Parameter | Type |
|-----------|------|
| slot      | int  |


:::


## Properties

|  Name   |  Type   | Has Getter | Has Setter |
|---------|---------|------------|------------|
| isEmpty | boolean | true       | false      |
| size    | int     | true       | false      |

