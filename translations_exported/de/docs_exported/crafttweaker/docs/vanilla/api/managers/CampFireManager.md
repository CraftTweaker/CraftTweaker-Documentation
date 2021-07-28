# CampFireManager



## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.CampFireManager;
```


## Implemented Interfaces
CampFireManager implements the following interfaces. That means all methods defined in these interfaces are also available in CampFireManager

- [ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)

## Methoden

:::group{name=addJSONRecipe}

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

Return Type: void

```zenscript
// CampFireManager.addJSONRecipe(name as string, data as IData) as void

campfire.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Parameter | Type                             | Beschreibung                    |
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
// CampFireManager.addRecipe(name as string, output as IItemStack, input as IIngredient, xp as float, cookTime as int) as void

campfire.addRecipe("wool2diamond", <item:minecraft:diamond>, <tag:items:minecraft:wool>, 1.0, 30);
```

| Parameter | Type                                          | Beschreibung                    |
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
// CampFireManager.getAllRecipes() as stdlib.List<WrapperRecipe>

campfire.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
CampFireManager.getRecipeByName(name as string) as WrapperRecipe
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Returns a map of all known recipes.

Returns: A Map of recipe name to recipe of all known recipes.  
Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)]

```zenscript
// CampFireManager.getRecipeMap() as WrapperRecipe[MCResourceLocation]

campfire.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
CampFireManager.getRecipesByOutput(output as IIngredient) as stdlib.List<WrapperRecipe>
```

| Parameter | Type                                          | Beschreibung            |
| --------- | --------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Remove all recipes in this registry

Return Type: void

```zenscript
// CampFireManager.removeAll() as void

campfire.removeAll();
```

:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid

Return Type: void

```zenscript
// CampFireManager.removeByModid(modid as string) as void

campfire.removeByModid("minecraft");
```

| Parameter | Type   | Beschreibung                   |
| --------- | ------ | ------------------------------ |
| modid     | string | modid of the recipes to remove |


:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
// CampFireManager.removeByModid(modid as string, exclude as RecipeFilter) as void

campfire.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| Parameter    | Type                                             | Beschreibung                   |
| ------------ | ------------------------------------------------ | ------------------------------ |
| modid        | string                                           | modid of the recipes to remove |
| ausschließen | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | zu entfernende Rezepte.        |


:::

:::group{name=removeByName}

Remove recipe based on Registry name

Return Type: void

```zenscript
// CampFireManager.removeByName(name as string) as void

campfire.removeByName("minecraft:furnace");
```

| Parameter | Type   | Beschreibung                      |
| --------- | ------ | --------------------------------- |
| name      | string | registry name of recipe to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex.

Return Type: void

```zenscript
// CampFireManager.removeByRegex(regex as string) as void

campfire.removeByRegex("\\d_\\d");
```

| Parameter | Type   | Beschreibung           |
| --------- | ------ | ---------------------- |
| regex     | string | regex to match against |


:::

:::group{name=removeByRegex}

Remove recipe based on regex with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
// CampFireManager.removeByRegex(regex as string, exclude as RecipeFilter) as void

campfire.removeByRegex("\\d_\\d", (name as string) => {return name == "orange_wool";});
```

| Parameter    | Type                                             | Beschreibung            |
| ------------ | ------------------------------------------------ | ----------------------- |
| regex        | string                                           | regex to match against  |
| ausschließen | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |


:::

:::group{name=removeRecipe}

Remove a recipe based on it's output.

Return Type: void

```zenscript
// CampFireManager.removeRecipe(output as IIngredient) as void

campfire.removeRecipe(<tag:items:minecraft:wool>);
```

| Parameter | Type                                          | Beschreibung         |
| --------- | --------------------------------------------- | -------------------- |
| output    | [IIngredient](/vanilla/api/items/IIngredient) | output of the recipe |


:::

:::group{name=removeRecipe}

Removes a recipe based on it's output.

Return Type: void

```zenscript
// CampFireManager.removeRecipe(output as IItemStack) as void

campfire.removeRecipe(<item:minecraft:glass>);
```

| Parameter | Type                                        | Beschreibung         |
| --------- | ------------------------------------------- | -------------------- |
| output    | [IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |


:::

:::group{name=removeRecipe}

Removes a recipe based on it's output and input.

Return Type: void

```zenscript
// CampFireManager.removeRecipe(output as IItemStack, input as IIngredient) as void

campfire.removeRecipe(<item:minecraft:diamond>, <tag:items:minecraft:wool>);
```

| Parameter | Type                                          | Beschreibung                         |
| --------- | --------------------------------------------- | ------------------------------------ |
| output    | [IItemStack](/vanilla/api/items/IItemStack)   | IItemStack output of the recipe.     |
| input     | [IIngredient](/vanilla/api/items/IIngredient) | IIngredient of the recipe to remove. |


:::

:::group{name=removeRecipeByInput}

Removes all recipes who's input contains the given IItemStack.

Return Type: void

```zenscript
// CampFireManager.removeRecipeByInput(input as IItemStack) as void

campfire.removeRecipeByInput(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                        | Beschreibung          |
| --------- | ------------------------------------------- | --------------------- |
| input     | [IItemStack](/vanilla/api/items/IItemStack) | The input IItemStack. |


:::


## Properties

| Name       | Type                                                                                                           | Has Getter | Has Setter | Beschreibung                        |
| ---------- | -------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------------------------------- |
| allRecipes | stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;                              | true       | false      | No Description Provided             |
| recipeMap  | [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)] | true       | false      | Returns a map of all known recipes. |

