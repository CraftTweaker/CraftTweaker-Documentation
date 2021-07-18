# StoneCutterManager



## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.StoneCutterManager;
```


## Implemented Interfaces
StoneCutterManager implements the following interfaces. That means all methods defined in these interfaces are also available in StoneCutterManager

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Methods

:::group{name=addJSONRecipe}

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

Return Type: void

```zenscript
StoneCutterManager.addJSONRecipe(name as string, data as IData) as void
stoneCutter.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Параметр | Тип                              | Description                     |
| -------- | -------------------------------- | ------------------------------- |
| name     | string                           | name of the recipe              |
| data     | [IData](/vanilla/api/data/IData) | data representing the json file |


:::

:::group{name=addRecipe}

Adds a recipe to the stone cutter

Return Type: void

```zenscript
StoneCutterManager.addRecipe(recipeName as string, output as IItemStack, input as IIngredient) as void
stoneCutter.addRecipe("recipe_name", <item:minecraft:grass>, <tag:items:minecraft:wool>);
```

| Параметр   | Тип                                           | Description                                         |
| ---------- | --------------------------------------------- | --------------------------------------------------- |
| recipeName | string                                        | name of the recipe                                  |
| output     | [IItemStack](/vanilla/api/items/IItemStack)   | output [IItemStack](/vanilla/api/items/IItemStack)  |
| input      | [IIngredient](/vanilla/api/items/IIngredient) | input [IIngredient](/vanilla/api/items/IIngredient) |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
StoneCutterManager.getAllRecipes() as stdlib.List<WrapperRecipe>
stoneCutter.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
StoneCutterManager.getRecipeByName(name as string) as WrapperRecipe
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| name     | string | No Description Provided |


:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
StoneCutterManager.getRecipesByOutput(output as IIngredient) as stdlib.List<WrapperRecipe>
```

| Параметр | Тип                                           | Description             |
| -------- | --------------------------------------------- | ----------------------- |
| output   | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Remove all recipes in this registry

Return Type: void

```zenscript
StoneCutterManager.removeAll() as void
stoneCutter.removeAll();
```

:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid

Return Type: void

```zenscript
StoneCutterManager.removeByModid(modid as string) as void
stoneCutter.removeByModid("minecraft");
```

| Параметр | Тип    | Description                    |
| -------- | ------ | ------------------------------ |
| modid    | string | modid of the recipes to remove |


:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
StoneCutterManager.removeByModid(modid as string, exclude as RecipeFilter) as void
stoneCutter.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| Параметр  | Тип                                              | Description                         |
| --------- | ------------------------------------------------ | ----------------------------------- |
| modid     | string                                           | modid of the recipes to remove      |
| исключить | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | рецепты для exlude от быть удалены. |


:::

:::group{name=removeByName}

Remove recipe based on Registry name

Return Type: void

```zenscript
StoneCutterManager.removeByName(name as string) as void
stoneCutter.removeByName("minecraft:furnace");
```

| Параметр | Тип    | Description                       |
| -------- | ------ | --------------------------------- |
| name     | string | registry name of recipe to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex

Return Type: void

```zenscript
StoneCutterManager.removeByRegex(regex as string) as void
stoneCutter.removeByRegex("\\d_\\d");
```

| Параметр | Тип    | Description            |
| -------- | ------ | ---------------------- |
| regex    | string | regex to match against |


:::

:::group{name=removeRecipe}

Remove a recipe based on it's output.

Return Type: void

```zenscript
StoneCutterManager.removeRecipe(output as IItemStack) as void
stoneCutter.removeRecipe(<item:minecraft:glass>);
```

| Параметр | Тип                                         | Description          |
| -------- | ------------------------------------------- | -------------------- |
| output   | [IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |


:::


