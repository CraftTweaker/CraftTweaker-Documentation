# FurnaceManager



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.FurnaceManager;
```


## Implemented Interfaces
FurnaceManager implements the following interfaces. That means all methods defined in these interfaces are also available in FurnaceManager

- [ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)

## Methods

:::group{name=addJSONRecipe}

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

Return Type: void

```zenscript
// FurnaceManager.addJSONRecipe(name as string, data as IData) as void

furnace.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Parameter | Type                             | Description                     |
| --------- | -------------------------------- | ------------------------------- |
| name      | string                           | name of the recipe              |
| data      | [IData](/vanilla/api/data/IData) | data representing the json file |


:::

:::group{name=addRecipe}

Adds a recipe based on given params.

 Note: A `cookTime` of `0` will cause the recipe to never complete, it will burn and use fuel, but no progress will be made on the recipe, it needs to be at-least `1` or more.

 Saying that, if you would like to make a recipe that will never complete (for example being able to give the player an infinitely burning furnace for whatever reason), you can still use a `cookTime` of `0`.

Return Type: void

```zenscript
// FurnaceManager.addRecipe(name as string, output as IItemStack, input as IIngredient, xp as float, cookTime as int) as void

furnace.addRecipe("wool2diamond", <item:minecraft:diamond>, <tag:items:minecraft:wool>, 1.0, 30);
```

| Parameter | Type                                          | Description                     |
| --------- | --------------------------------------------- | ------------------------------- |
| name      | string                                        | Name of the new recipe          |
| output    | [IItemStack](/vanilla/api/items/IItemStack)   | IItemStack output of the recipe |
| input     | [IIngredient](/vanilla/api/items/IIngredient) | IIngredient input of the recipe |
| xp        | float                                         | how much xp the player gets     |
| cookTime  | int                                           | how long it takes to cook       |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
// FurnaceManager.getAllRecipes() as stdlib.List<WrapperRecipe>

furnace.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
FurnaceManager.getRecipeByName(name as string) as WrapperRecipe
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Returns a map of all known recipes.

Returns: A Map of recipe name to recipe of all known recipes.  
Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)]

```zenscript
// FurnaceManager.getRecipeMap() as WrapperRecipe[MCResourceLocation]

furnace.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
FurnaceManager.getRecipesByOutput(output as IIngredient) as stdlib.List<WrapperRecipe>
```

| Parameter | Type                                          | Description             |
| --------- | --------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Remove all recipes in this registry

Return Type: void

```zenscript
// FurnaceManager.removeAll() as void

furnace.removeAll();
```

:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid

Return Type: void

```zenscript
// FurnaceManager.removeByModid(modid as string) as void

furnace.removeByModid("minecraft");
```

| Parameter | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| modid     | string | modid of the recipes to remove |


:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
// FurnaceManager.removeByModid(modid as string, exclude as RecipeFilter) as void

furnace.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| Parameter | Type                                             | Description                    |
| --------- | ------------------------------------------------ | ------------------------------ |
| modid     | string                                           | modid of the recipes to remove |
| 除外する      | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | 排除されるレシピを教えてくれます               |


:::

:::group{name=removeByName}

Remove recipe based on Registry name

Return Type: void

```zenscript
// FurnaceManager.removeByName(name as string) as void

furnace.removeByName("minecraft:furnace");
```

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| name      | string | registry name of recipe to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex.

Return Type: void

```zenscript
// FurnaceManager.removeByRegex(regex as string) as void

furnace.removeByRegex("\\d_\\d");
```

| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| regex     | string | regex to match against |


:::

:::group{name=removeByRegex}

Remove recipe based on regex with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
// FurnaceManager.removeByRegex(regex as string, exclude as RecipeFilter) as void

furnace.removeByRegex("\\d_\\d", (name as string) => {return name == "orange_wool";});
```

| Parameter | Type                                             | Description             |
| --------- | ------------------------------------------------ | ----------------------- |
| regex     | string                                           | regex to match against  |
| 除外する      | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |


:::

:::group{name=removeRecipe}

Remove a recipe based on it's output.

Return Type: void

```zenscript
// FurnaceManager.removeRecipe(output as IIngredient) as void

furnace.removeRecipe(<tag:items:minecraft:wool>);
```

| Parameter | Type                                          | Description          |
| --------- | --------------------------------------------- | -------------------- |
| output    | [IIngredient](/vanilla/api/items/IIngredient) | output of the recipe |


:::

:::group{name=removeRecipe}

Removes a recipe based on it's output.

Return Type: void

```zenscript
// FurnaceManager.removeRecipe(output as IItemStack) as void

furnace.removeRecipe(<item:minecraft:glass>);
```

| Parameter | Type                                        | Description          |
| --------- | ------------------------------------------- | -------------------- |
| output    | [IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |


:::

:::group{name=removeRecipe}

Removes a recipe based on it's output and input.

Return Type: void

```zenscript
// FurnaceManager.removeRecipe(output as IItemStack, input as IIngredient) as void

furnace.removeRecipe(<item:minecraft:diamond>, <tag:items:minecraft:wool>);
```

| Parameter | Type                                          | Description                          |
| --------- | --------------------------------------------- | ------------------------------------ |
| output    | [IItemStack](/vanilla/api/items/IItemStack)   | IItemStack output of the recipe.     |
| input     | [IIngredient](/vanilla/api/items/IIngredient) | IIngredient of the recipe to remove. |


:::

:::group{name=removeRecipeByInput}

Removes all recipes who's input contains the given IItemStack.

Return Type: void

```zenscript
// FurnaceManager.removeRecipeByInput(input as IItemStack) as void

furnace.removeRecipeByInput(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                        | Description           |
| --------- | ------------------------------------------- | --------------------- |
| input     | [IItemStack](/vanilla/api/items/IItemStack) | The input IItemStack. |


:::


## Properties

| 名称         | Type                                                                                                           | Has Getter | Has Setter | Description                         |
| ---------- | -------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------------------------------- |
| allRecipes | stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;                              | true       | false      | No Description Provided             |
| recipeMap  | [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)] | true       | false      | Returns a map of all known recipes. |

