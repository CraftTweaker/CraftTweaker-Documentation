# SmokerManager



This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importation de la classe
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.SmokerManager
```

## Implemented Interfaces
SmokerManager implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.registries.ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)

## Méthodes
### addJSONRecipe

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

```zenscript
smoker.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
smoker.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Paramètre | Type de texte                                          | Libellé                         |
| --------- | ------------------------------------------------------ | ------------------------------- |
| Nom       | Chaîne de caractères                                   | name of the recipe              |
| données   | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data representing the json file |


### Ajouter une recette

Adds a recipe based on given params.

```zenscript
smoker.addRecipe(name as String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient, xp as float, cookTime as int);
smoker.addRecipe("wool2diamond", <item:diamond>, <tag:minecraft:wool>, 1.0, 0);
```

| Paramètre | Type de texte                                                       | Libellé                         |
| --------- | ------------------------------------------------------------------- | ------------------------------- |
| Nom       | Chaîne de caractères                                                | Name of the new recipe          |
| Sortie    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | IItemStack output of the recipe |
| input     | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | IIngredient input of the recipe |
| xp        | flottant                                                            | how much xp the player gets     |
| cookTime  | Indice                                                              | how long it takes to cook       |


### Retirer tout

Remove all recipes in this registry

```zenscript
smoker.removeAll();
```

### removeByModid

Remove recipe based on Registry name modid

```zenscript
smoker.removeByModid(modid as String);
smoker.removeByModid("minecraft");
```

| Paramètre | Type de texte        | Libellé                        |
| --------- | -------------------- | ------------------------------ |
| modifier  | Chaîne de caractères | modid of the recipes to remove |


### removeByName

Remove recipe based on Registry name

```zenscript
smoker.removeByName(name as String);
smoker.removeByName("minecraft:furnace");
```

| Paramètre | Type de texte        | Libellé                           |
| --------- | -------------------- | --------------------------------- |
| Nom       | Chaîne de caractères | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

```zenscript
smoker.removeByRegex(regex as String);
smoker.removeByRegex("\\d_\\d");
```

| Paramètre | Type de texte        | Libellé                |
| --------- | -------------------- | ---------------------- |
| regex     | Chaîne de caractères | regex to match against |


### removeRecipe

Remove a recipe based on it's output.

```zenscript
smoker.removeRecipe(output as crafttweaker.api.item.IItemStack);
smoker.removeRecipe(<item:minecraft:glass>);
```

| Paramètre | Type de texte                                                     | Libellé              |
| --------- | ----------------------------------------------------------------- | -------------------- |
| Sortie    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |



Removes a recipe based on it's output and input.

```zenscript
smoker.removeRecipe(output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient);
smoker.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
```

| Paramètre | Type de texte                                                       | Libellé                              |
| --------- | ------------------------------------------------------------------- | ------------------------------------ |
| Sortie    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | IItemStack output of the recipe.     |
| input     | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | IIngredient of the recipe to remove. |



