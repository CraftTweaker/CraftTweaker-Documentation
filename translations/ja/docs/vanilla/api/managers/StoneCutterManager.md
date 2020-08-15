# StoneCutterManager



crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.StoneCutterManager
```

## Implemented Interfaces
StoneCutterManager implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## メソッド
### addJSONRecipe

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

```zenscript
stoneCutter.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
stoneCutter.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| パラメータ | タイプ                                                    | 説明                              |
| ----- | ------------------------------------------------------ | ------------------------------- |
| name  | 文字列型                                                   | name of the recipe              |
| データ   | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data representing the json file |


### addRecipe

Adds a recipe to the stone cutter

```zenscript
stoneCutter.addRecipe(recipeName as String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient);
stoneCutter.addRecipe("recipe_name", <item:minecraft:grass>, <tag:minecraft:wool>);
```

| パラメータ      | タイプ                                                                 | 説明                 |
| ---------- | ------------------------------------------------------------------- | ------------------ |
| recipeName | 文字列型                                                                | name of the recipe |
| 出力         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | output IItemStack  |
| input      | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | input IIngredient  |


### すべて削除

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

| パラメータ | タイプ  | 説明                             |
| ----- | ---- | ------------------------------ |
| modid | 文字列型 | modid of the recipes to remove |


### removeByName

Remove recipe based on Registry name

```zenscript
stoneCutter.removeByName(name as String);
stoneCutter.removeByName("minecraft:furnace");
```

| パラメータ | タイプ  | 説明                                |
| ----- | ---- | --------------------------------- |
| 名前    | 文字列型 | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

```zenscript
stoneCutter.removeByRegex(regex as String);
stoneCutter.removeByRegex("\\d_\\d");
```

| パラメータ | タイプ  | 説明                     |
| ----- | ---- | ---------------------- |
| regex | 文字列型 | regex to match against |


### removeRecipe

Remove a recipe based on it's output.

```zenscript
stoneCutter.removeRecipe(output as crafttweaker.api.item.IItemStack);
stoneCutter.removeRecipe(<item:minecraft:glass>);
```

| パラメータ | タイプ                                                               | 説明                   |
| ----- | ----------------------------------------------------------------- | -------------------- |
| 出力    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |



## プロパティー

| 名称            | タイプ  | Has Getter | Has Setter |
| ------------- | ---- | ---------- | ---------- |
| commandString | 文字列型 | true       | false      |

