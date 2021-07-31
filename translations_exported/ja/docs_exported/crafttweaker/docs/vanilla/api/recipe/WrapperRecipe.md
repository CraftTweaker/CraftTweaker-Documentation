# WrapperRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipes.WrapperRecipe;
```


## Implemented Interfaces
WrapperRecipe implements the following interfaces. That means all methods defined in these interfaces are also available in WrapperRecipe

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods

:::group{name=canFit}

Return Type: boolean

```zenscript
WrapperRecipe.canFit(width as int, height as int) as boolean
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| width     | int  | No Description Provided |
| height    | int  | No Description Provided |


:::

:::group{name=replace}

Return Type: void

```zenscript
WrapperRecipe.replace(from as IIngredient, to as IIngredient) as void
```

| Parameter | Type                                          | Description             |
| --------- | --------------------------------------------- | ----------------------- |
| from      | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |
| to        | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


:::


## Properties

| 名称                        | Type                                                                         | Has Getter | Has Setter | Description             |
| ------------------------- | ---------------------------------------------------------------------------- | ---------- | ---------- | ----------------------- |
| commandString             | string                                                                       | true       | false      | No Description Provided |
| dynamic                   | boolean型                                                                     | true       | false      | No Description Provided |
| group                     | string                                                                       | true       | false      | No Description Provided |
| icon                      | [IItemStack](/vanilla/api/items/IItemStack)                                  | true       | false      | No Description Provided |
| id                        | [MCResourceLocation](/vanilla/api/util/MCResourceLocation)                   | true       | false      | No Description Provided |
| ingredients               | stdlib.List&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt; | true       | false      | No Description Provided |
| isShapedCraftingRecipe    | boolean型                                                                     | true       | false      | No Description Provided |
| isShapelessCraftingRecipe | boolean型                                                                     | true       | false      | No Description Provided |
| output                    | [IItemStack](/vanilla/api/items/IItemStack)                                  | true       | false      | No Description Provided |
| recipeManager             | [IRecipeManager](/vanilla/api/managers/IRecipeManager)                       | true       | false      | No Description Provided |

