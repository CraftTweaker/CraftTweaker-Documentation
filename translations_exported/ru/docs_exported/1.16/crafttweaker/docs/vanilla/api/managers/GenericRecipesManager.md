# GenericRecipesManager

This recipe manager allows you to perform removal actions over all recipe managers. You can access this manager by using the `recipes` global keyword.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.GenericRecipesManager;
```


## Методы

:::group{name=addJSONRecipe}

Add a new recipe based on the given recipe in a valid DataPack JSON format.

 Unlike the addJSONRecipe method in [IRecipeManager](/vanilla/api/managers/IRecipeManager) you **must** set the type of the recipe within the JSON yourself.

Return Type: void

```zenscript
// GenericRecipesManager.addJSONRecipe(name as string, data as IData) as void

recipes.addJSONRecipe("recipe_name", {
 type: "minecraft:smoking",
 ingredient: <item:minecraft:gold_ore>,
 result: <item:minecraft:cooked_porkchop>,
 experience: 0.35 as float,
 cookingtime: 100
 });
```

| Параметр | Тип                              | Описание                   |
| -------- | -------------------------------- | -------------------------- |
| name     | string                           | The recipe's resource path |
| data     | [IData](/vanilla/api/data/IData) | The recipe in JSON format  |


:::

:::group{name=getAllManagers}

Returns a list of all known recipe managers. This includes managers added by mod integrations as well as wrapper managers added to provide simple support.

Return Type: stdlib.List&lt;[IRecipeManager](/vanilla/api/managers/IRecipeManager)&gt;

```zenscript
// GenericRecipesManager.getAllManagers() as stdlib.List<IRecipeManager>

recipes.getAllManagers();
```

:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
// GenericRecipesManager.getAllRecipes() as stdlib.List<WrapperRecipe>

recipes.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
GenericRecipesManager.getRecipeByName(name as string) as WrapperRecipe
```

| Параметр | Тип    | Описание                |
| -------- | ------ | ----------------------- |
| name     | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Returns a map of all known recipes.

Returns: A Map of recipe name to recipe of all known recipes.  
Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)]

```zenscript
// GenericRecipesManager.getRecipeMap() as WrapperRecipe[MCResourceLocation]

recipes.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
GenericRecipesManager.getRecipesByOutput(output as IIngredient) as stdlib.List<WrapperRecipe>
```

| Параметр | Тип                                           | Описание                |
| -------- | --------------------------------------------- | ----------------------- |
| output   | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Removes all recipes from all managers.

Return Type: void

```zenscript
// GenericRecipesManager.removeAll() as void

recipes.removeAll();
```

:::

:::group{name=removeByModid}

Removes all recipes from the provided mod. Chooses the recipes based on their full recipe name, not based on output item!

Return Type: void

```zenscript
// GenericRecipesManager.removeByModid(modId as string) as void

recipes.removeByModid("crafttweaker");
```

| Параметр | Тип    | Описание        |
| -------- | ------ | --------------- |
| modId    | string | The mod's modId |


:::

:::group{name=removeByModid}

Removes all recipes from the provided mod. Allows a function to exclude certain recipe names from being removed. In the example below, only the recipe for the white bed would remain. Since the recipe's namespace is already fixed based on the modId argument, the recipe filter will only check the resource path!

Return Type: void

```zenscript
// GenericRecipesManager.removeByModid(modId as string, exclude as RecipeFilter) as void

recipes.removeByModid("minecraft", (recipeName as string) => recipeName == "white_bed");
```

| Параметр  | Тип                                              | Описание                                                                  |
| --------- | ------------------------------------------------ | ------------------------------------------------------------------------- |
| modId     | string                                           | The mod's modid                                                           |
| исключить | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | Function that returns `true` if the recipe should remain in the registry. |


:::

:::group{name=removeByName}

Removes all recipes with this name.

Return Type: void

```zenscript
GenericRecipesManager.removeByName(name as string) as void
```

| Параметр | Тип    | Описание                  |
| -------- | ------ | ------------------------- |
| name     | string | The recipe name to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex

Return Type: void

```zenscript
// GenericRecipesManager.removeByRegex(regex as string) as void

recipes.removeByRegex("\\d_\\d");
```

| Параметр | Тип    | Описание               |
| -------- | ------ | ---------------------- |
| regex    | string | regex to match against |


:::

:::group{name=removeRecipe}

Removes recipes by output

Return Type: void

```zenscript
// GenericRecipesManager.removeRecipe(output as IIngredient) as void

recipes.removeRecipe(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                           | Описание          |
| -------- | --------------------------------------------- | ----------------- |
| output   | [IIngredient](/vanilla/api/items/IIngredient) | The recipe result |


:::

:::group{name=removeRecipeByInput}

Removes all recipes who's input contains the given IItemStack.

Return Type: void

```zenscript
// GenericRecipesManager.removeRecipeByInput(input as IItemStack) as void

recipes.removeRecipeByInput(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                         | Описание              |
| -------- | ------------------------------------------- | --------------------- |
| input    | [IItemStack](/vanilla/api/items/IItemStack) | The input IItemStack. |


:::


## Свойства

| Название    | Тип                                                                                                            | Имеет Getter | Имеет Setter | Описание                                                                                                                                                                 |
| ----------- | -------------------------------------------------------------------------------------------------------------- | ------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| allManagers | stdlib.List&lt;[IRecipeManager](/vanilla/api/managers/IRecipeManager)&gt;                          | true         | false        | Returns a list of all known recipe managers. <br />  This includes managers added by mod integrations as well as wrapper managers added to provide simple support. |
| allRecipes  | stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;                              | true         | false        | No Description Provided                                                                                                                                                  |
| recipeMap   | [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)] | true         | false        | Returns a map of all known recipes.                                                                                                                                      |

