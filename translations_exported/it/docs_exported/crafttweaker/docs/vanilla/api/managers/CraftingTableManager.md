# CraftingTableManager



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.CraftingTableManager;
```


## Interfacce Implementate
CraftingTableManager implements the following interfaces. That means all methods defined in these interfaces are also available in CraftingTableManager

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)
## Methods

### addShaped

Adds a shaped recipe to the crafting table

Return Type: void

```zenscript
CraftingTableManager.addShaped(recipeName as string, output as IItemStack, ingredients as IIngredient[][], recipeFunction as RecipeFunctionMatrix) as void
craftingTable.addShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parameter      | Type                                                             | Description                                                                                            | Optional | DefaultValue |
| -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | -------- | ------------ |
| recipeName     | string                                                           | name of the recipe to add.                                                                             | false    |              |
| output         | [IItemStack](/vanilla/api/items/IItemStack)                      | output [IItemStack](/vanilla/api/items/IItemStack)                                                     | false    |              |
| ingredients    | [IIngredient](/vanilla/api/items/IIngredient)[][]                | array of an array of [IIngredient](/vanilla/api/items/IIngredient) for inputs                          | false    |              |
| recipeFunction | [RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) | optional [RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) for more advanced conditions | true     |              |

### addShapedMirrored

Adds a mirrored shaped recipe to the crafting table

Return Type: void

```zenscript
CraftingTableManager.addShapedMirrored(recipeName as string, output as IItemStack, ingredients as IIngredient[][], recipeFunction as RecipeFunctionMatrix) as void
craftingTable.addShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parameter      | Type                                                             | Description                                                                                            | Optional | DefaultValue |
| -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | -------- | ------------ |
| recipeName     | string                                                           | name of the recipe to add.                                                                             | false    |              |
| output         | [IItemStack](/vanilla/api/items/IItemStack)                      | output [IItemStack](/vanilla/api/items/IItemStack)                                                     | false    |              |
| ingredients    | [IIngredient](/vanilla/api/items/IIngredient)[][]                | array of an array of [IIngredient](/vanilla/api/items/IIngredient) for inputs                          | false    |              |
| recipeFunction | [RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) | optional [RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) for more advanced conditions | true     |              |

### addShapeless

Adds a shapeless recipe to the crafting table

Return Type: void

```zenscript
CraftingTableManager.addShapeless(recipeName as string, output as IItemStack, ingredients as IIngredient[], recipeFunction as RecipeFunctionArray) as void
craftingTable.addShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>], (usualOut as IItemStack, inputs as IItemStack[]) => {if(inputs[0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parameter      | Type                                                           | Description                                                                                          | Optional | DefaultValue |
| -------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------- | ------------ |
| recipeName     | string                                                         | name of the recipe to add.                                                                           | false    |              |
| output         | [IItemStack](/vanilla/api/items/IItemStack)                    | output [IItemStack](/vanilla/api/items/IItemStack)                                                   | false    |              |
| ingredients    | [IIngredient](/vanilla/api/items/IIngredient)[]                | array of [IIngredient](/vanilla/api/items/IIngredient) for inputs                                    | false    |              |
| recipeFunction | [RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray) | optional [RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray) for more advanced conditions | true     |              |


