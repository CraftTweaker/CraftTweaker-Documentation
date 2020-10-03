# StoneCutterManager



This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.StoneCutterManager
```

## Implemented Interfaces
StoneCutterManager implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Methods
### addJSONRecipe

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

```zenscript
stoneCutter.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
stoneCutter.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Parameter | Type                                                   | Description                     |
| --------- | ------------------------------------------------------ | ------------------------------- |
| name      | String                                                 | name of the recipe              |
| data      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data representing the json file |


### addRecipe

Adds a recipe to the stone cutter

```zenscript
stoneCutter.addRecipe(recipeName as String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient);
stoneCutter.addRecipe("recipe_name", <item:minecraft:grass>, <tag:minecraft:wool>);
```

| Parameter  | Type                                                                | Description                                                                 |
| ---------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| recipeName | String                                                              | name of the recipe                                                          |
| output     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | output [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)    |
| input      | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | entrada [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) |


### getRecipeByName

Tipo de devolución: [crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)

```zenscript
stoneCutter.getRecipeByName(nombre como cadena);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | String | No description provided |


### Obtener recetas por salida

Tipo de retorno: Lista&lt;[crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)&gt;

```zenscript
stoneCutter.getRecipesByOutput(salida como crafttweaker.api.item.IIngredient);
```

| Parameter | Type                                                                | Description             |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| output    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | No description provided |


### removeAll

Remove all recipes in this registry

```zenscript
stoneCutter.removeAll();
```

### removeByModid

Remove recipe based on Registry name modid

```zenscript
stoneCutter.removeByModid(modid as String);
stoneCutter.removeByModid("minecraft");
```

| Parameter | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| modid     | String | modid of the recipes to remove |



Quitar receta basada en la modificación del nombre del registro con una comprobación de exclusión añadida, por lo que puede eliminar todo el mod además de unos pocos especificados.

```zenscript
stoneCutter.removeByModid(modid as String, excluir como crafttweaker.api.recipe.RecipeFilter);
stoneCutter.removeByModid("minecraft", (nombre como cadena) => {return name == "narange_wool";});
```

| Parameter | Type                                                               | Description                            |
| --------- | ------------------------------------------------------------------ | -------------------------------------- |
| modid     | String                                                             | modid of the recipes to remove         |
| excluir   | [crafttweaker.api.receta.Receta](/vanilla/api/recipe/RecipeFilter) | recetas para exluir de ser eliminadas. |


### removeByName

Remove recipe based on Registry name

```zenscript
stoneCutter.removeByName(name as String);
stoneCutter.removeByName("minecraft:furnace");
```

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| name      | String | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

```zenscript
stoneCutter.removeByRegex(regex as String);
stoneCutter.removeByRegex("\\d_\\d");
```

| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| regex     | String | regex to match against |


### removeRecipe

Remove a recipe based on it's output.

```zenscript
stoneCutter.removeRecipe(output as crafttweaker.api.item.IItemStack);
stoneCutter.removeRecipe(<item:minecraft:glass>);
```

| Parameter | Type                                                              | Description          |
| --------- | ----------------------------------------------------------------- | -------------------- |
| output    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |



## Properties

| Name          | Type   | Has Getter | Has Setter |
| ------------- | ------ | ---------- | ---------- |
| commandString | String | true       | false      |

