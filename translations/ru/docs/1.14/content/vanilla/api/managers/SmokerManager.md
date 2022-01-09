# SmokerManager



Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.SmokerManager
```

## Implemented Interfaces
SmokerManager implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.registries.ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)

## Методы
### addJSONRecipe

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

```zenscript
smoker.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
smoker.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Параметр | Тип                                                    | Описание                        |
| -------- | ------------------------------------------------------ | ------------------------------- |
| name     | String                                                 | name of the recipe              |
| data     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data representing the json file |


### addRecipe

Adds a recipe based on given params.

```zenscript
smoker.addRecipe(name as String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient, xp as float, cookTime as int);
smoker.addRecipe("wool2diamond", <item:diamond>, <tag:minecraft:wool>, 1.0, 0);
```

| Параметр | Тип                                                                 | Описание                        |
| -------- | ------------------------------------------------------------------- | ------------------------------- |
| name     | String                                                              | Name of the new recipe          |
| output   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | IItemStack output of the recipe |
| input    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | IIngredient input of the recipe |
| xp       | float                                                               | how much xp the player gets     |
| cookTime | int                                                                 | how long it takes to cook       |


### removeAll

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

| Параметр | Тип    | Описание                       |
| -------- | ------ | ------------------------------ |
| modid    | String | modid of the recipes to remove |


### removeByName

Remove recipe based on Registry name

```zenscript
smoker.removeByName(name as String);
smoker.removeByName("minecraft:furnace");
```

| Параметр | Тип    | Описание                          |
| -------- | ------ | --------------------------------- |
| name     | String | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

```zenscript
smoker.removeByRegex(regex as String);
smoker.removeByRegex("\\d_\\d");
```

| Параметр | Тип    | Описание               |
| -------- | ------ | ---------------------- |
| regex    | String | regex to match against |


### removeRecipe

Remove a recipe based on it's output.

```zenscript
smoker.removeRecipe(output as crafttweaker.api.item.IItemStack);
smoker.removeRecipe(<item:minecraft:glass>);
```

| Параметр | Тип                                                               | Описание             |
| -------- | ----------------------------------------------------------------- | -------------------- |
| output   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |



Removes a recipe based on it's output and input.

```zenscript
smoker.removeRecipe(output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient);
smoker.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
```

| Параметр | Тип                                                                 | Описание                             |
| -------- | ------------------------------------------------------------------- | ------------------------------------ |
| output   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | IItemStack output of the recipe.     |
| input    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | IIngredient of the recipe to remove. |



