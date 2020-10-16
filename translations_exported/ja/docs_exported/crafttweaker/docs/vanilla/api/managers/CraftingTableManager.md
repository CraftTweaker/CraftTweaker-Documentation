# CraftingTableManager



This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.CraftingTableManager
```

## Implemented Interfaces
CraftingTableManager implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Methods
### addJSONRecipe

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

```zenscript
craftingTable.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
craftingTable.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Parameter | Type                                                   | Description                     |
| --------- | ------------------------------------------------------ | ------------------------------- |
| name      | String                                                 | name of the recipe              |
| データ       | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data representing the json file |


### addShaped

Adds a shaped recipe to the crafting table

```zenscript
craftingTable.addShaped(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[][], recipeFunction as crafttweaker.api.recipe.RecipeFunctionMatrix);
craftingTable.addShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]]);
craftingTable.addShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parameter      | Type                                                                                     | Description                                                                                                | IsOptional | Default Value |
| -------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------- | ------------- |
| recipeName     | String                                                                                   | name of the recipe to add.                                                                                 | false      | `null`        |
| output         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                        | output [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                                   | false      | `null`        |
| ingredients    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[][]                  | array of an array of [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) for inputs        | false      | `null`        |
| recipeFunction | [crafttweaker.api.recipe.RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) | オプションの [crafttweaker.api.recipe.RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) より高度な条件を提供 | true       | `null`        |


### addShapedMirrored

Adds a mirrored shaped recipe to the crafting table

```zenscript
craftingTable.addShapedMirrored(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[][], recipeFunction as crafttweaker.api.recipe.RecipeFunctionMatrix);
craftingTable.addShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]]);
craftingTable.addShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parameter      | Type                                                                                     | Description                                                                                                | IsOptional | Default Value |
| -------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------- | ------------- |
| recipeName     | String                                                                                   | name of the recipe to add.                                                                                 | false      | `null`        |
| output         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                        | output [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                                   | false      | `null`        |
| ingredients    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[][]                  | array of an array of [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) for inputs        | false      | `null`        |
| recipeFunction | [crafttweaker.api.recipe.RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) | オプションの [crafttweaker.api.recipe.RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) より高度な条件を提供 | true       | `null`        |


### addShapeless

Adds a shapeless recipe to the crafting table

```zenscript
craftingTable.addShapeless(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[], recipeFunction as crafttweaker.api.recipe.RecipeFunctionArray);
craftingTable.addShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>]);
craftingTable.addShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>], (usualOut as IItemStack, inputs as IItemStack[]) => {if(inputs[0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parameter      | Type                                                                                   | Description                                                                                               | IsOptional | Default Value |
| -------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ---------- | ------------- |
| recipeName     | String                                                                                 | name of the recipe to add.                                                                                | false      | `null`        |
| output         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                      | output [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                                  | false      | `null`        |
| ingredients    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[]                  | array of [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) for inputs                   | false      | `null`        |
| recipeFunction | [crafttweaker.api.recipe.RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray) | オプションの [crafttweaker.api.recipe.RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray) より高度な条件のため。 | true       | `null`        |


### getRecipeByName

戻り値の型: [crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)

```zenscript
craftingTable.getRecipeByName(name as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | String | No description provided |


### getRecipesByOutput

戻り値の型: リスト&lt;[crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)&gt;

```zenscript
craftingTable.getRecipesByOutput(crafttweaker.api.item.IIngredient);
```

| Parameter | Type                                                                | Description             |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| output    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | No description provided |


### removeAll

Remove all recipes in this registry

```zenscript
craftingTable.removeAll();
```

### removeByModid

Remove recipe based on Registry name modid

```zenscript
craftingTable.removeByModid(modid as String);
craftingTable.removeByModid("minecraft");
```

| Parameter | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| modid     | String | modid of the recipes to remove |



追加された除外チェック付きのレジストリ名modidに基づいてレシピを削除すると、いくつか指定された以外のMod全体を削除できます。

```zenscript
craftingTable.removeByModid(modid as String, exclude as crafttweaker.api.recipeFilter);
craftingTable.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| Parameter | Type                                                                     | Description                    |
| --------- | ------------------------------------------------------------------------ | ------------------------------ |
| modid     | String                                                                   | modid of the recipes to remove |
| 除外する      | [crafttweaker.api.recipe.RecipeFilter](/vanilla/api/recipe/RecipeFilter) | 排除されるレシピを教えてくれます               |


### removeByName

Remove recipe based on Registry name

```zenscript
craftingTable.removeByName(name as String);
craftingTable.removeByName("minecraft:furnace");
```

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| name      | String | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

```zenscript
craftingTable.removeByRegex(regex as String);
craftingTable.removeByRegex("\\d_\\d");
```

| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| regex     | String | regex to match against |


### removeRecipe

Remove a recipe based on it's output.

```zenscript
craftingTable.removeRecipe(output as crafttweaker.api.item.IItemStack);
craftingTable.removeRecipe(<item:minecraft:glass>);
```

| Parameter | Type                                                              | Description          |
| --------- | ----------------------------------------------------------------- | -------------------- |
| output    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |



## Properties

| 名称            | Type   | Has Getter | Has Setter |
| ------------- | ------ | ---------- | ---------- |
| commandString | String | true       | false      |

