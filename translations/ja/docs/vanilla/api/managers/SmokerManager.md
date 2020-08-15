# SmokerManager



crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.SmokerManager
```

## Implemented Interfaces
SmokerManager implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.registries.ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)

## メソッド
### addJSONRecipe

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

```zenscript
smoker.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
smoker.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| パラメータ | タイプ                                                    | 説明                              |
| ----- | ------------------------------------------------------ | ------------------------------- |
| name  | 文字列型                                                   | name of the recipe              |
| データ   | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data representing the json file |


### addRecipe

Adds a recipe based on given params.

```zenscript
smoker.addRecipe(name as String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient, xp as float, cookTime as int);
smoker.addRecipe("wool2diamond", <item:diamond>, <tag:minecraft:wool>, 1.0, 0);
```

| パラメータ    | タイプ                                                                 | 説明                              |
| -------- | ------------------------------------------------------------------- | ------------------------------- |
| 名前       | 文字列型                                                                | Name of the new recipe          |
| 出力       | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | IItemStack output of the recipe |
| input    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | IIngredient input of the recipe |
| xp       | float型                                                              | how much xp the player gets     |
| cookTime | int                                                                 | how long it takes to cook       |


### すべて削除

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

| パラメータ | タイプ  | 説明                             |
| ----- | ---- | ------------------------------ |
| modid | 文字列型 | modid of the recipes to remove |


### removeByName

Remove recipe based on Registry name

```zenscript
smoker.removeByName(name as String);
smoker.removeByName("minecraft:furnace");
```

| パラメータ | タイプ  | 説明                                |
| ----- | ---- | --------------------------------- |
| 名前    | 文字列型 | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

```zenscript
smoker.removeByRegex(regex as String);
smoker.removeByRegex("\\d_\\d");
```

| パラメータ | タイプ  | 説明                     |
| ----- | ---- | ---------------------- |
| regex | 文字列型 | regex to match against |


### removeRecipe

Remove a recipe based on it's output.

```zenscript
smoker.removeRecipe(output as crafttweaker.api.item.IItemStack);
smoker.removeRecipe(<item:minecraft:glass>);
```

| パラメータ | タイプ                                                               | 説明                   |
| ----- | ----------------------------------------------------------------- | -------------------- |
| 出力    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |



Removes a recipe based on it's output and input.

```zenscript
smoker.removeRecipe(output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient);
smoker.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
```

| パラメータ | タイプ                                                                 | 説明                                   |
| ----- | ------------------------------------------------------------------- | ------------------------------------ |
| 出力    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | IItemStack output of the recipe.     |
| input | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | IIngredient of the recipe to remove. |



