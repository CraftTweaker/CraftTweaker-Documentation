# SmokerManager



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.SmokerManager;
```


## Implemented Interfaces
SmokerManager implements the following interfaces. That means all methods defined in these interfaces are also available in SmokerManager

- [ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)

## Methods

:::group{name=addJSONRecipe}

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

Return Type: void

```zenscript
SmokerManager.addJSONRecipe(name as string, data as IData) as void
smoker.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Parameter | Type                             | Description                     |
| --------- | -------------------------------- | ------------------------------- |
| name      | string                           | name of the recipe              |
| data      | [IData](/vanilla/api/data/IData) | data representing the json file |


:::

:::group{name=addRecipe}

Adds a recipe based on given params.

Return Type: void

```zenscript
SmokerManager.addRecipe(name as string, output as IItemStack, input as IIngredient, xp as float, cookTime as int) as void
smoker.addRecipe("wool2diamond", <item:minecraft:diamond>, <tag:items:minecraft:wool>, 1.0, 0);
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
SmokerManager.getAllRecipes() as stdlib.List<WrapperRecipe>
smoker.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
SmokerManager.getRecipeByName(name as string) as WrapperRecipe
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
SmokerManager.getRecipesByOutput(output as IIngredient) as stdlib.List<WrapperRecipe>
```

| Parameter | Type                                          | Description             |
| --------- | --------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Supprimer toutes les recettes de ce registre.

Return Type: void

```zenscript
SmokerManager.removeAll() as void
smoker.removeAll();
```

:::

:::group{name=removeByModid}

Supprimer la recette basée sur la modification du nom du Registre.

Return Type: void

```zenscript
SmokerManager.removeByModid(modid as string) as void
smoker.removeByModid("minecraft");
```

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| modid     | string | modifier les recettes à supprimer |


:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
SmokerManager.removeByModid(modid as string, exclude as RecipeFilter) as void
smoker.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| Parameter | Type                                             | Description                              |
| --------- | ------------------------------------------------ | ---------------------------------------- |
| modid     | string                                           | modifier les recettes à supprimer        |
| exclure   | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | des recettes pour ne plus être enlevées. |


:::

:::group{name=removeByName}

Supprimer la recette basée sur le nom du Registre.

Return Type: void

```zenscript
SmokerManager.removeByName(name as string) as void
smoker.removeByName("minecraft:furnace");
```

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| name      | string | registry name of recipe to remove |


:::

:::group{name=removeByRegex}

Supprimer la recette basée sur la regex.

Return Type: void

```zenscript
SmokerManager.removeByRegex(regex as string) as void
smoker.removeByRegex("\\d_\\d");
```

| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| regex     | string | regex to match against |


:::

:::group{name=removeRecipe}

Remove a recipe based on it's output.

Return Type: void

```zenscript
SmokerManager.removeRecipe(output as IItemStack) as void
smoker.removeRecipe(<item:minecraft:glass>);
```

| Parameter | Type                                        | Description          |
| --------- | ------------------------------------------- | -------------------- |
| output    | [IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |


:::

:::group{name=removeRecipe}

Removes a recipe based on it's output and input.

Return Type: void

```zenscript
SmokerManager.removeRecipe(output as IItemStack, input as IIngredient) as void
smoker.removeRecipe(<item:minecraft:diamond>, <tag:items:minecraft:wool>);
```

| Parameter | Type                                          | Description                          |
| --------- | --------------------------------------------- | ------------------------------------ |
| output    | [IItemStack](/vanilla/api/items/IItemStack)   | IItemStack output of the recipe.     |
| input     | [IIngredient](/vanilla/api/items/IIngredient) | IIngredient of the recipe to remove. |


:::


