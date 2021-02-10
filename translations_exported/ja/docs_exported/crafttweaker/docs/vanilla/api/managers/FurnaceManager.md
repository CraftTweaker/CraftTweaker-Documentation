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

### addJSONRecipe

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

Return Type: void

```zenscript
FurnaceManager.addJSONRecipe(name as string, data as IData) as void
furnace.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Parameter | Type                             | Description                     |
| --------- | -------------------------------- | ------------------------------- |
| name      | string                           | name of the recipe              |
| data      | [IData](/vanilla/api/data/IData) | data representing the json file |


### addRecipe

Adds a recipe based on given params.

Return Type: void

```zenscript
FurnaceManager.addRecipe(name as string, output as IItemStack, input as IIngredient, xp as float, cookTime as int) as void
furnace.addRecipe("wool2diamond", <item:minecraft:diamond>, <tag:minecraft:wool>, 1.0, 0);
```

| Parameter | Type                                          | Description                     |
| --------- | --------------------------------------------- | ------------------------------- |
| name      | string                                        | Name of the new recipe          |
| output    | [IItemStack](/vanilla/api/items/IItemStack)   | IItemStack output of the recipe |
| input     | [IIngredient](/vanilla/api/items/IIngredient) | IIngredient input of the recipe |
| xp        | float                                         | how much xp the player gets     |
| cookTime  | int                                           | how long it takes to cook       |


### getAllRecipes

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
FurnaceManager.getAllRecipes() as stdlib.List<WrapperRecipe>
furnace.getAllRecipes();
```

### getRecipeByName

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
FurnaceManager.getRecipeByName(name as string) as WrapperRecipe
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


### getRecipesByOutput

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
FurnaceManager.getRecipesByOutput(output as IIngredient) as stdlib.List<WrapperRecipe>
```

| Parameter | Type                                          | Description             |
| --------- | --------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


### removeAll

Remove all recipes in this registry

Return Type: void

```zenscript
FurnaceManager.removeAll() as void
furnace.removeAll();
```

### removeByModid

Remove recipe based on Registry name modid

Return Type: void

```zenscript
FurnaceManager.removeByModid(modid as string) as void
furnace.removeByModid("minecraft");
```

| Parameter | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| modid     | string | modid of the recipes to remove |


Remove recipe based on Registry name modid with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
FurnaceManager.removeByModid(modid as string, exclude as RecipeFilter) as void
furnace.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| Parameter | Type                                             | Description                    |
| --------- | ------------------------------------------------ | ------------------------------ |
| modid     | string                                           | modid of the recipes to remove |
| 除外する      | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | 排除されるレシピを教えてくれます               |


### removeByName

Remove recipe based on Registry name

Return Type: void

```zenscript
FurnaceManager.removeByName(name as string) as void
furnace.removeByName("minecraft:furnace");
```

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| name      | string | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

Return Type: void

```zenscript
FurnaceManager.removeByRegex(regex as string) as void
furnace.removeByRegex("\\d_\\d");
```

| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| regex     | string | regex to match against |


### removeRecipe

Remove a recipe based on it's output.

Return Type: void

```zenscript
FurnaceManager.removeRecipe(output as IItemStack) as void
furnace.removeRecipe(<item:minecraft:glass>);
```

| Parameter | Type                                        | Description          |
| --------- | ------------------------------------------- | -------------------- |
| output    | [IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |


Removes a recipe based on it's output and input.

Return Type: void

```zenscript
FurnaceManager.removeRecipe(output as IItemStack, input as IIngredient) as void
furnace.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
```

| Parameter | Type                                          | Description                          |
| --------- | --------------------------------------------- | ------------------------------------ |
| output    | [IItemStack](/vanilla/api/items/IItemStack)   | IItemStack output of the recipe.     |
| input     | [IIngredient](/vanilla/api/items/IIngredient) | IIngredient of the recipe to remove. |



