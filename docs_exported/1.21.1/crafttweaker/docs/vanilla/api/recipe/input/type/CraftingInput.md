# CraftingInput

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.input.type.CraftingInput;
```


## Implemented Interfaces
CraftingInput implements the following interfaces. That means all methods defined in these interfaces are also available in CraftingInput

- [RecipeInput](/vanilla/api/recipe/input/RecipeInput)

## Static Methods

:::group{name=of}

Return Type: [CraftingInput](/vanilla/api/recipe/input/type/CraftingInput)

```zenscript
CraftingInput.of(width as int, height as int, items as stdlib.List<IItemStack>) as CraftingInput
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| width     | int                                                           |
| height    | int                                                           |
| items     | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; |


:::

## Methods

:::group{name=getItem}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
CraftingInput.getItem(col as int, row as int) as ItemStack
```

| Parameter | Type |
|-----------|------|
| col       | int  |
| row       | int  |


:::


## Properties

|      Name       |                             Type                              | Has Getter | Has Setter |
|-----------------|---------------------------------------------------------------|------------|------------|
| height          | int                                                           | true       | false      |
| ingredientCount | int                                                           | true       | false      |
| items           | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | true       | false      |
| width           | int                                                           | true       | false      |

