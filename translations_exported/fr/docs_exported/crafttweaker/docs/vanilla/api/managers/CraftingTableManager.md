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
craftingTable.addJSONRecipe("Nom_de_la_recette", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Parameter | Type                                                   | Description                     |
| --------- | ------------------------------------------------------ | ------------------------------- |
| name      | String                                                 | name of the recipe              |
| data      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data representing the json file |


### addShaped

Adds a shaped recipe to the crafting table

```zenscript
craftingTable.addShaped(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[][], recipeFunction as crafttweaker.api.recipeFunctionMatrix);
craftingTable.addShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]]);
craftingTable. ddShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(entrées[0][0]. isplayName == "bloc diamant totalement réel" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parameter      | Type                                                                                     | Description                                                                                                                          | IsOptional | Default Value |
| -------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------- | ------------- |
| recipeName     | String                                                                                   | name of the recipe to add.                                                                                                           | false      | `null`        |
| output         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                        | output [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                                                             | false      | `null`        |
| ingredients    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[][]                  | tableau d'un tableau de [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) pour les entrées                         | false      | `null`        |
| recipeFunction | [crafttweaker.api.recipe.RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) | optionnel [crafttweaker.api.recipe.RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) pour des conditions plus avancées | true       | `null`        |


### addShapedMirrored

Adds a mirrored shaped recipe to the crafting table

```zenscript
craftingTable.addShapedMirrored(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[][], recipeFunction as crafttweaker.api.recipe.RecipeFunctionMatrix);
craftingTable.addShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]]);
craftingTable.addShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parameter      | Type                                                                                     | Description                                                                                                                          | IsOptional | Default Value |
| -------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------- | ------------- |
| recipeName     | String                                                                                   | name of the recipe to add.                                                                                                           | false      | `null`        |
| output         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                        | output [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                                                             | false      | `null`        |
| ingredients    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[][]                  | tableau d'un tableau de [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) pour les entrées                         | false      | `null`        |
| recipeFunction | [crafttweaker.api.recipe.RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) | optionnel [crafttweaker.api.recipe.RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) pour des conditions plus avancées | true       | `null`        |


### addShapeless

Adds a shapeless recipe to the crafting table

```zenscript
craftingTable.addShapeless(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[], recipeFunction as crafttweaker.api.recipe.RecipeFunctionArray);
craftingTable.addShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>]);
craftingTable. ddShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>], (usualOut as IItemStack, inputs as IItemStack[]) => {if(inputs[0]. isplayName == "bloc diamant totalement réel" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parameter      | Type                                                                                   | Description                                                                                                                        | IsOptional | Default Value |
| -------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------------- |
| recipeName     | String                                                                                 | name of the recipe to add.                                                                                                         | false      | `null`        |
| output         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                      | output [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                                                           | false      | `null`        |
| ingredients    | [crafttweaker.api.item.Ingredient](/vanilla/api/items/IIngredient)[]                   | tableau de [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) pour les entrées                                    | false      | `null`        |
| recipeFunction | [crafttweaker.api.recipe.RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray) | optionnel [crafttweaker.api.recipe.RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray) pour des conditions plus avancées | true       | `null`        |


### getRecipeByName

Type de retour : [crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)

```zenscript
craftingTable.getRecipeByName(name as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | String | No description provided |


### Obtenir des recettes par sortie

Type de retour : Liste&lt;[crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)&gt;

```zenscript
craftingTable.getRecipesByOutput(sortie comme crafttweaker.api.item.IIngredient);
```

| Parameter | Type                                                                | Description             |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| output    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | No description provided |


### removeAll

Supprimer toutes les recettes de ce registre.

```zenscript
craftingTable.removeAll();
```

### Retirer par Modid

Supprimer la recette basée sur la modification du nom du Registre.

```zenscript
craftingTable.removeByModid(modifier en tant que chaîne);
craftingTable.removeByModid("minecraft");
```

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| modid     | String | modifier les recettes à supprimer |



Supprimer la recette basée sur le nom du Registre modifié avec une vérification d'exclusion ajoutée, de sorte que vous pouvez supprimer l'ensemble du mod en plus de quelques spécifiés.

```zenscript
craftingTable.removeByModid(modid as String, exclude as crafttweaker.api.recipe.RecipeFilter);
craftingTable.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| Parameter | Type                                                                        | Description                              |
| --------- | --------------------------------------------------------------------------- | ---------------------------------------- |
| modid     | String                                                                      | modifier les recettes à supprimer        |
| exclure   | [format@@0 crafttweaker.api.recipeFilter](/vanilla/api/recipe/RecipeFilter) | des recettes pour ne plus être enlevées. |


### removeByName

Supprimer la recette basée sur le nom du Registre.

```zenscript
craftingTable.removeByName(name as String);
craftingTable.removeByName("minecraft:furnace");
```

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| name      | String | registry name of recipe to remove |


### removeByRegex

Supprimer la recette basée sur la regex.

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

| Name          | Type   | Has Getter | Has Setter |
| ------------- | ------ | ---------- | ---------- |
| commandString | String | true       | false      |

