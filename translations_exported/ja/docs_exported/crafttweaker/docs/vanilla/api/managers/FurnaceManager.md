# FurnaceManager



This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.FurnaceManager
```

## Implemented Interfaces
FurnaceManager implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.registries.ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Methods
### addJSONRecipe

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

```zenscript
furnace.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
furnace.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Parameter | Type                                                   | Description                     |
| --------- | ------------------------------------------------------ | ------------------------------- |
| name      | String                                                 | name of the recipe              |
| data      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data representing the json file |


### addRecipe

Adds a recipe based on given params.

```zenscript
furnace.addRecipe(name as String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient, xp as float, cookTime as int);
furnace.addRecipe("wool2diamond", <item:diamond>, <tag:minecraft:wool>, 1.0, 0);
```

| Parameter | Type                                                                | Description                     |
| --------- | ------------------------------------------------------------------- | ------------------------------- |
| name      | String                                                              | Name of the new recipe          |
| output    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | IItemStack output of the recipe |
| input     | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | IIngredient input of the recipe |
| xp        | float                                                               | how much xp the player gets     |
| cookTime  | int                                                                 | how long it takes to cook       |


### getRecipeByName

戻り値の型: [crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)

```zenscript
furnace.getRecipeByName(name as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | String | No description provided |


### getRecipesByOutput

戻り値の型: リスト&lt;[crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)&gt;

```zenscript
furnace.getRecipesByOutput(crafttweaker.api.item.IIngredient);
```

| Parameter | Type                                                                | Description             |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| output    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | No description provided |


### removeAll

Remove all recipes in this registry

```zenscript
furnace.removeAll();
```

### removeByModid

Remove recipe based on Registry name modid

```zenscript
furnace.removeByModid(modid as String);
furnace.removeByModid("minecraft");
```

| Parameter | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| modid     | String | modid of the recipes to remove |



追加された除外チェック付きのレジストリ名modidに基づいてレシピを削除すると、いくつか指定された以外のMod全体を削除できます。

```zenscript
furnace.removeByModid(modied as String, exclude as crafttweaker.api.recipeFilter);
furnace.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| Parameter | Type                                                                     | Description                    |
| --------- | ------------------------------------------------------------------------ | ------------------------------ |
| modid     | String                                                                   | modid of the recipes to remove |
| 除外する      | [crafttweaker.api.recipe.RecipeFilter](/vanilla/api/recipe/RecipeFilter) | 排除されるレシピを教えてくれます               |


### removeByName

Remove recipe based on Registry name

```zenscript
furnace.removeByName(name as String);
furnace.removeByName("minecraft:furnace");
```

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| name      | String | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

```zenscript
furnace.removeByRegex(regex as String);
furnace.removeByRegex("\\d_\\d");
```

| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| regex     | String | regex to match against |


### removeRecipe

Remove a recipe based on it's output.

```zenscript
furnace.removeRecipe(output as crafttweaker.api.item.IItemStack);
furnace.removeRecipe(<item:minecraft:glass>);
```

| Parameter | Type                                                              | Description          |
| --------- | ----------------------------------------------------------------- | -------------------- |
| output    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |



Removes a recipe based on it's output and input.

```zenscript
furnace.removeRecipe(output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient);
furnace.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
```

| Parameter | Type                                                                | Description                          |
| --------- | ------------------------------------------------------------------- | ------------------------------------ |
| output    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | IItemStack output of the recipe.     |
| input     | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | IIngredient of the recipe to remove. |



## Properties

| 名称            | Type   | Has Getter | Has Setter |
| ------------- | ------ | ---------- | ---------- |
| commandString | String | true       | false      |

