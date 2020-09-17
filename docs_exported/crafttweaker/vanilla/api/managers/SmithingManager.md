# SmithingManager



This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.  
```zenscript
crafttweaker.api.SmithingManager
```

## Implemented Interfaces
SmithingManager implements the following interfaces. That means any method available to them can also be used on this class.  
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Methods
### addJSONRecipe

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

```zenscript
smithing.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
smithing.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | String | name of the recipe |
| data | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data representing the json file |


### addRecipe

Adds a recipe to the smithing table.

```zenscript
smithing.addRecipe(recipeName as String, result as crafttweaker.api.item.IItemStack, base as crafttweaker.api.item.IIngredient, addition as crafttweaker.api.item.IIngredient);
smithing.addRecipe("recipe_name", <item:minecraft:golden_apple>, <item:minecraft:apple>, <tag:forge:ingots/gold>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| recipeName | String | Name of the recipe. |
| result | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The item created by the recipe. |
| base | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | The initial ingredient for the recipe. |
| addition | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | The item added to the base item. |


### getRecipeByName

Return type: [crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)

```zenscript
smithing.getRecipeByName(name as String);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | String | No description provided |


### getRecipesByOutput

Return type: List&lt;[crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)&gt;

```zenscript
smithing.getRecipesByOutput(output as crafttweaker.api.item.IIngredient);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| output | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | No description provided |


### removeAll

Remove all recipes in this registry

```zenscript
smithing.removeAll();
```

### removeByModid

Remove recipe based on Registry name modid

```zenscript
smithing.removeByModid(modid as String);
smithing.removeByModid("minecraft");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | String | modid of the recipes to remove |



Remove recipe based on Registry name modid with an added exclusion check, so you can remove the whole mod besides a few specified.

```zenscript
smithing.removeByModid(modid as String, exclude as crafttweaker.api.recipe.RecipeFilter);
smithing.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | String | modid of the recipes to remove |
| exclude | [crafttweaker.api.recipe.RecipeFilter](/vanilla/api/recipe/RecipeFilter) | recipes to exlude from being removed. |


### removeByName

Remove recipe based on Registry name

```zenscript
smithing.removeByName(name as String);
smithing.removeByName("minecraft:furnace");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | String | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

```zenscript
smithing.removeByRegex(regex as String);
smithing.removeByRegex("\\d_\\d");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | String | regex to match against |


### removeRecipe

Remove a recipe based on it's output.

```zenscript
smithing.removeRecipe(output as crafttweaker.api.item.IItemStack);
smithing.removeRecipe(<item:minecraft:glass>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| output | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |



## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| commandString | String | true | false |

