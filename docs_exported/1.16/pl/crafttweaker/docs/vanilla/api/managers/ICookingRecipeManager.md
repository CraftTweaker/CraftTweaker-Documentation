# ICookingRecipeManager

Default interface for Registry based handlers as they can all remove recipes by ResourceLocation.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.registries.ICookingRecipeManager;
```


## Implemented Interfaces
ICookingRecipeManager implements the following interfaces. That means all methods defined in these interfaces are also available in ICookingRecipeManager

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Methods

:::group{name=addJSONRecipe}

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

Return Type: void

```zenscript
ICookingRecipeManager.addJSONRecipe(name as string, data as IData) as void
furnace.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
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
ICookingRecipeManager.addRecipe(name as string, output as IItemStack, input as IIngredient, xp as float, cookTime as int) as void
furnace.addRecipe("wool2diamond", <item:minecraft:diamond>, <tag:items:minecraft:wool>, 1.0, 0);
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
ICookingRecipeManager.getAllRecipes() as stdlib.List<WrapperRecipe>
furnace.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
ICookingRecipeManager.getRecipeByName(name as string) as WrapperRecipe
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
ICookingRecipeManager.getRecipesByOutput(output as IIngredient) as stdlib.List<WrapperRecipe>
```

| Parameter | Type                                          | Description             |
| --------- | --------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Remove all recipes in this registry

Return Type: void

```zenscript
ICookingRecipeManager.removeAll() as void
furnace.removeAll();
```

:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid

Return Type: void

```zenscript
ICookingRecipeManager.removeByModid(modid as string) as void
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
ICookingRecipeManager.removeByModid(modid as string, exclude as RecipeFilter) as void
furnace.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| Parameter | Type                                             | Description                      |
| --------- | ------------------------------------------------ | -------------------------------- |
| modid     | string                                           | modid of the recipes to remove   |
| wyklucz   | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | receptury na wyjście z usuwania. |


:::

:::group{name=removeByName}

Remove recipe based on Registry name

Return Type: void

```zenscript
ICookingRecipeManager.removeByName(name as string) as void
furnace.removeByName("minecraft:furnace");
```

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| name      | string | registry name of recipe to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex

Return Type: void

```zenscript
ICookingRecipeManager.removeByRegex(regex as string) as void
furnace.removeByRegex("\\d_\\d");
```

| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| regex     | string | regex to match against |


:::

:::group{name=removeRecipe}

Remove a recipe based on it's output.

Return Type: void

```zenscript
ICookingRecipeManager.removeRecipe(output as IItemStack) as void
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
ICookingRecipeManager.removeRecipe(output as IItemStack, input as IIngredient) as void
furnace.removeRecipe(<item:minecraft:diamond>, <tag:items:minecraft:wool>);
```

| Parameter | Type                                          | Description                          |
| --------- | --------------------------------------------- | ------------------------------------ |
| output    | [IItemStack](/vanilla/api/items/IItemStack)   | IItemStack output of the recipe.     |
| input     | [IIngredient](/vanilla/api/items/IIngredient) | IIngredient of the recipe to remove. |


:::


