# StoneCutterManager



This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importowanie klasy
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.StoneCutterManager
```

## Implemented Interfaces
StoneCutterManager implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Metody
### addJSONRecipe

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

```zenscript
stoneCutter.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
stoneCutter.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Parametr | Typ                                                    | Opis                            |
| -------- | ------------------------------------------------------ | ------------------------------- |
| Nazwa    | Ciąg znaków                                            | name of the recipe              |
| dane     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data representing the json file |


### napis

Adds a recipe to the stone cutter

```zenscript
stoneCutter.addRecipe(recipeName as String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient);
stoneCutter.addRecipe("recipe_name", <item:minecraft:grass>, <tag:minecraft:wool>);
```

| Parametr   | Typ                                                                 | Opis               |
| ---------- | ------------------------------------------------------------------- | ------------------ |
| recipeName | Ciąg znaków                                                         | name of the recipe |
| wyjście    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | output IItemStack  |
| input      | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | input IIngredient  |


### usuń wszystko

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

| Parametr | Typ         | Opis                           |
| -------- | ----------- | ------------------------------ |
| modid    | Ciąg znaków | modid of the recipes to remove |


### removeByName

Remove recipe based on Registry name

```zenscript
stoneCutter.removeByName(name as String);
stoneCutter.removeByName("minecraft:furnace");
```

| Parametr | Typ         | Opis                              |
| -------- | ----------- | --------------------------------- |
| Nazwa    | Ciąg znaków | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

```zenscript
stoneCutter.removeByRegex(regex as String);
stoneCutter.removeByRegex("\\d_\\d");
```

| Parametr | Typ         | Opis                   |
| -------- | ----------- | ---------------------- |
| regex    | Ciąg znaków | regex to match against |


### removeRecipe

Remove a recipe based on it's output.

```zenscript
stoneCutter.removeRecipe(output as crafttweaker.api.item.IItemStack);
stoneCutter.removeRecipe(<item:minecraft:glass>);
```

| Parametr | Typ                                                               | Opis                 |
| -------- | ----------------------------------------------------------------- | -------------------- |
| wyjście  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |



## Właściwości

| Nazwisko  | Typ         | Has Getter | Has Setter |
| --------- | ----------- | ---------- | ---------- |
| polecenie | Ciąg znaków | prawda     | fałszywy   |

