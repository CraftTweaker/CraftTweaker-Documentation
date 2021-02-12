# CraftingTableManager



## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.CraftingTableManager;
```


## Implemented Interfaces
CraftingTableManager implements the following interfaces. That means all methods defined in these interfaces are also available in CraftingTableManager

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Methods

### addJSONRecipe

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

Return Type: void

```zenscript
CraftingTableManager.addJSONRecipe(name as string, data as IData) as void
craftingTable.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Параметр | Тип                              | Description                     |
| -------- | -------------------------------- | ------------------------------- |
| name     | string                           | name of the recipe              |
| data     | [IData](/vanilla/api/data/IData) | data representing the json file |


### addShaped

Adds a shaped recipe to the crafting table

Return Type: void

```zenscript
CraftingTableManager.addShaped(recipeName as string, output as IItemStack, ingredients as IIngredient[][], recipeFunction as RecipeFunctionMatrix) as void
craftingTable.addShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:items:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Параметр       | Тип                                                              | Description                                                                                            | Optional | DefaultValue |
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
craftingTable.addShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:items:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Параметр       | Тип                                                              | Description                                                                                            | Optional | DefaultValue |
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
craftingTable.addShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:items:minecraft:wool>], (usualOut as IItemStack, inputs as IItemStack[]) => {if(inputs[0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Параметр       | Тип                                                            | Description                                                                                          | Optional | DefaultValue |
| -------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------- | ------------ |
| recipeName     | string                                                         | name of the recipe to add.                                                                           | false    |              |
| output         | [IItemStack](/vanilla/api/items/IItemStack)                    | output [IItemStack](/vanilla/api/items/IItemStack)                                                   | false    |              |
| ingredients    | [IIngredient](/vanilla/api/items/IIngredient)[]                | array of [IIngredient](/vanilla/api/items/IIngredient) for inputs                                    | false    |              |
| recipeFunction | [RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray) | optional [RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray) for more advanced conditions | true     |              |

### getAllRecipes

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
CraftingTableManager.getAllRecipes() as stdlib.List<WrapperRecipe>
craftingTable.getAllRecipes();
```

### getRecipeByName

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
CraftingTableManager.getRecipeByName(name as string) as WrapperRecipe
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| name     | string | No Description Provided |


### getRecipesByFrom

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
CraftingTableManager.getRecipesByOutput(output as IIngredient) as stdlib.List<WrapperRecipe>
```

| Параметр | Тип                                           | Description             |
| -------- | --------------------------------------------- | ----------------------- |
| output   | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


### removeAll

Remove all recipes in this registry

Return Type: void

```zenscript
CraftingTableManager.removeAll() as void
craftingTable.removeAll();
```

### removeByModid

Remove recipe based on Registry name modid

Return Type: void

```zenscript
CraftingTableManager.removeByModid(modid as string) as void
craftingTable.removeByModid("minecraft");
```

| Параметр | Тип    | Description                    |
| -------- | ------ | ------------------------------ |
| modid    | string | modid of the recipes to remove |


Remove recipe based on Registry name modid with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
CraftingTableManager.removeByModid(modid as string, exclude as RecipeFilter) as void
craftingTable.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| Параметр  | Тип                                              | Description                         |
| --------- | ------------------------------------------------ | ----------------------------------- |
| modid     | string                                           | modid of the recipes to remove      |
| исключить | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | рецепты для exlude от быть удалены. |


### removeByName

Remove recipe based on Registry name

Return Type: void

```zenscript
CraftingTableManager.removeByName(name as string) as void
craftingTable.removeByName("minecraft:furnace");
```

| Параметр | Тип    | Description                       |
| -------- | ------ | --------------------------------- |
| name     | string | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

Return Type: void

```zenscript
CraftingTableManager.removeByRegex(regex as string) as void
craftingTable.removeByRegex("\\d_\\d");
```

| Параметр | Тип    | Description            |
| -------- | ------ | ---------------------- |
| regex    | string | regex to match against |


### removeRecipe

Remove a recipe based on it's output.

Return Type: void

```zenscript
CraftingTableManager.removeRecipe(output as IItemStack) as void
craftingTable.removeRecipe(<item:minecraft:glass>);
```

| Параметр | Тип                                         | Description          |
| -------- | ------------------------------------------- | -------------------- |
| output   | [IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |



