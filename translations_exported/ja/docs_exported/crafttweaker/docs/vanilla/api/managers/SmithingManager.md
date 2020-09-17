# SmithingManager



crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.SmithingManager
```

## 実装されたインターフェース
SmithingManager は以下のインターフェースを実装しています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [craftweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.registrries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## メソッド
### addJSONRecipe

提供されたIDataに基づいてレシピを追加します。 提供されたIDataはDataPack JSONを表し、IRecipeTypeシステムをサポートするDataPackのレシピを効果的に登録することができます。

```zenscript
smithing.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
smithing.addJSONRecipe("recipe_name", {item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| パラメータ | タイプ                                                    | 説明             |
| ----- | ------------------------------------------------------ | -------------- |
| 名前    | 文字列型                                                   | レシピの名前         |
| データ   | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | jsonファイルを表すデータ |


### addRecipe

鍛冶テーブルにレシピを追加します。

```zenscript
smithing.addRecipe(recipeName as String, result as crafttweaker.api.item.IItemStack, base as crafttweaker.api.item.IIngredient, add as crafttweaker.api.item.IIngredient);
smithing.addRecipe("recipe_name", <item:minecraft:golden_apple>, <item:minecraft:apple>, <tag:forge:ingots/gold>);
```

| パラメータ  | タイプ                                                                | 説明                |
| ------ | ------------------------------------------------------------------ | ----------------- |
| レシピ名   | 文字列型                                                               | レシピの名前。           |
| result | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)  | レシピによって作成されたアイテム。 |
| ベース    | [craftweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | レシピの最初の成分。        |
| 追加     | [craftweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | 基本アイテムに追加されたアイテム。 |


### getRecipeByName

戻り値の型: [crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)

```zenscript
smithing.getRecipeByName(name as String);
```

| パラメータ | タイプ  | 説明           |
| ----- | ---- | ------------ |
| 名前    | 文字列型 | 説明が提供されていません |


### getRecipesByOutput

戻り値の型: リスト&lt;[crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)&gt;

```zenscript
smithing.getRecipesByOutput(crafttweaker.api.item.IIngredient);
```

| パラメータ | タイプ                                                                | 説明           |
| ----- | ------------------------------------------------------------------ | ------------ |
| 出力    | [craftweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | 説明が提供されていません |


### すべて削除

このレジストリ内のすべてのレシピを削除

```zenscript
smithing.removeAll();
```

### removeByModo

レジストリ名modidに基づいてレシピを削除

```zenscript
smithing.removeByModid(modid as String);
smithing.removeByModid("minecraft");
```

| パラメータ | タイプ  | 説明              |
| ----- | ---- | --------------- |
| modid | 文字列型 | 取り除くべきレシピの<unk> |



追加された除外チェック付きのレジストリ名modidに基づいてレシピを削除すると、いくつか指定された以外のMod全体を削除できます。

```zenscript
smithing.removeByModid(modied as String, exclude as crafttweaker.api.recipeFilter);
smithing.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| パラメータ | タイプ                                                                      | 説明               |
| ----- | ------------------------------------------------------------------------ | ---------------- |
| modid | 文字列型                                                                     | 取り除くべきレシピの<unk>  |
| 除外する  | [crafttweaker.api.recipe.RecipeFilter](/vanilla/api/recipe/RecipeFilter) | 排除されるレシピを教えてくれます |


### removeByName

レジストリ名に基づいてレシピを削除

```zenscript
smithing.removeByName(name as String);
smithing.removeByName("minecraft:furnace");
```

| パラメータ | タイプ  | 説明             |
| ----- | ---- | -------------- |
| 名前    | 文字列型 | 削除するレシピのレジストリ名 |


### removeByRegex

正規表現に基づいてレシピを削除

```zenscript
smithing.removeByRegex(regex as String);
smithing.removeByRegex("\\d_\\d");
```

| パラメータ | タイプ  | 説明        |
| ----- | ---- | --------- |
| Regex | 文字列型 | 正規表現と一致する |


### RemoveRecipe

出力に基づいてレシピを削除します。

```zenscript
smithing.removeRecipe(output as crafttweaker.api.item.IItemStack);
smithing.removeRecipe(<item:minecraft:glass>);
```

| パラメータ | タイプ                                                               | 説明     |
| ----- | ----------------------------------------------------------------- | ------ |
| 出力    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | レシピの出力 |



## プロパティー

| 名称            | タイプ  | ゲッターあり | セッターあり |
| ------------- | ---- | ------ | ------ |
| commandString | 文字列型 | true   | false  |

