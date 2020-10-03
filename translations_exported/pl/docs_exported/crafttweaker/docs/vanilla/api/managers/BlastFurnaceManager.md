# BlastFurnaceManager



This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.BlastFurnaceManager
```

## Implemented Interfaces
BlastFurnaceManager implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.registries.ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Methods
### addJSONRecipe

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

```zenscript
blastFurnace.addJSONRecipe(nazwa jako String, dane jako crafttweaker.api.data.IData);
blastFurnace.addJSONRecipe("recipe_name", {składnik:{item:<item:minecraft:gold_ore>.registryName},wynik:<item:minecraft:cooked_porkchop>.registryName,Doświadczenie:0.35 jako pływak, czas gotowania:100});
```

| Parameter | Type                                                   | Description                     |
| --------- | ------------------------------------------------------ | ------------------------------- |
| name      | String                                                 | name of the recipe              |
| data      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data representing the json file |


### addRecipe

Adds a recipe based on given params.

```zenscript
blastFurnace.addRecipe(name as String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient, xp as float, cookTime as int);
blastFurnace.addRecipe("wool2diamond", <item:diamond>, <tag:minecraft:wool>, 1.0, 0);
```

| Parameter | Type                                                                | Description                     |
| --------- | ------------------------------------------------------------------- | ------------------------------- |
| name      | String                                                              | Name of the new recipe          |
| output    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | IItemStack output of the recipe |
| input     | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | IIngredient input of the recipe |
| xp        | float                                                               | how much xp the player gets     |
| cookTime  | int                                                                 | how long it takes to cook       |


### getRecipeByName

Typ zwrotu: [crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)

```zenscript
blastFurnace.getRecipeByName(nazwa jako String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | String | No description provided |


### getRecipesByOutput

Typ zwracania: Lista&lt;[crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)&gt;

```zenscript
blastFurnace.getRecipesByOutput(output as crafttweaker.api.item.IIngredient);
```

| Parameter | Type                                                                | Description             |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| output    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | No description provided |


### removeAll

Remove all recipes in this registry

```zenscript
blastFurnace.removeAll();
```

### removeByModid

Remove recipe based on Registry name modid

```zenscript
blastFurnace.removeByModid(modid jako String);
blastFurnace.removeByModid("minecraft");
```

| Parameter | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| modid     | String | modid of the recipes to remove |



Usuń przepis na podstawie modida nazwy rejestru z dodanym sprawdzianem wykluczenia, dzięki czemu możesz usunąć cały mod poza kilkoma określonymi.

```zenscript
blastFurnace.removeByModid(modid jako string wykluczaj jako crafttweaker.api.recipe.RecipeFilter);
blastFurnace.removeByModid("minecraft", (nazwa jako string) => {return name == "orange_wool";});
```

| Parameter | Type                                                               | Description                      |
| --------- | ------------------------------------------------------------------ | -------------------------------- |
| modid     | String                                                             | modid of the recipes to remove   |
| wyklucz   | [crafttweaker.api.recipe.Filter](/vanilla/api/recipe/RecipeFilter) | receptury na wyjście z usuwania. |


### removeByName

Remove recipe based on Registry name

```zenscript
blastFurnace.removeByName(nazwa jako String);
blastFurnace.removeByName("minecraft:furnace");
```

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| name      | String | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

```zenscript
blastFurnace.removeByRegex(regex as String);
blastFurnace.removeByRegex("\\d_\\d");
```

| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| regex     | String | regex to match against |


### removeRecipe

Remove a recipe based on it's output.

```zenscript
blastFurnace.removeRecipe(wyjścia jako crafttweaker.api.item.IItemStack);
blastFurnace.removeRecipe(<item:minecraft:glass>);
```

| Parameter | Type                                                              | Description          |
| --------- | ----------------------------------------------------------------- | -------------------- |
| output    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |



Removes a recipe based on it's output and input.

```zenscript
blastFurnace.removeRecipe(output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient);
blastFurnace.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
```

| Parameter | Type                                                                | Description                          |
| --------- | ------------------------------------------------------------------- | ------------------------------------ |
| output    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | IItemStack output of the recipe.     |
| input     | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | IIngredient of the recipe to remove. |



## Properties

| Name          | Type   | Has Getter | Has Setter |
| ------------- | ------ | ---------- | ---------- |
| commandString | String | true       | false      |

