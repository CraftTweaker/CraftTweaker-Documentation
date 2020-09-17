# IRecipeManager

レジストリベースのハンドラのデフォルトインターフェイスは、すべてResourceLocationによってレシピを削除できるためです。

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.registrries.IRecipeManager
```

## 実装されたインターフェース
IRecipeManager は以下のインターフェースを実装しています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [craftweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## メソッド
### addJSONRecipe

提供されたIDataに基づいてレシピを追加します。 提供されたIDataはDataPack JSONを表し、IRecipeTypeシステムをサポートするDataPackのレシピを効果的に登録することができます。

```zenscript
craftingTable.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
craftingTable.addJSONRecipe("recipe_name", {item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| パラメータ | タイプ                                                    | 説明             |
| ----- | ------------------------------------------------------ | -------------- |
| 名前    | 文字列型                                                   | レシピの名前         |
| データ   | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | jsonファイルを表すデータ |


### getRecipeByName

戻り値の型: [crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)

```zenscript
craftingTable.getRecipeByName(name as String);
```

| パラメータ | タイプ  | 説明           |
| ----- | ---- | ------------ |
| 名前    | 文字列型 | 説明が提供されていません |


### getRecipesByOutput

戻り値の型: リスト&lt;[crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)&gt;

```zenscript
craftingTable.getRecipesByOutput(crafttweaker.api.item.IIngredient);
```

| パラメータ | タイプ                                                                | 説明           |
| ----- | ------------------------------------------------------------------ | ------------ |
| 出力    | [craftweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | 説明が提供されていません |


### すべて削除

このレジストリ内のすべてのレシピを削除

```zenscript
craftingTable.removeAll();
```

### removeByModo

レジストリ名modidに基づいてレシピを削除

```zenscript
craftingTable.removeByModid(modid as String);
craftingTable.removeByModid("minecraft");
```

| パラメータ | タイプ  | 説明              |
| ----- | ---- | --------------- |
| modid | 文字列型 | 取り除くべきレシピの<unk> |



追加された除外チェック付きのレジストリ名modidに基づいてレシピを削除すると、いくつか指定された以外のMod全体を削除できます。

```zenscript
craftingTable.removeByModid(modid as String, exclude as crafttweaker.api.recipeFilter);
craftingTable.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| パラメータ | タイプ                                                                      | 説明               |
| ----- | ------------------------------------------------------------------------ | ---------------- |
| modid | 文字列型                                                                     | 取り除くべきレシピの<unk>  |
| 除外する  | [crafttweaker.api.recipe.RecipeFilter](/vanilla/api/recipe/RecipeFilter) | 排除されるレシピを教えてくれます |


### removeByName

レジストリ名に基づいてレシピを削除

```zenscript
craftingTable.removeByName(name as String);
craftingTable.removeByName("minecraft:furnace");
```

| パラメータ | タイプ  | 説明             |
| ----- | ---- | -------------- |
| 名前    | 文字列型 | 削除するレシピのレジストリ名 |


### removeByRegex

正規表現に基づいてレシピを削除

```zenscript
craftingTable.removeByRegex(regex as String);
craftingTable.removeByRegex("\\d_\\d");
```

| パラメータ | タイプ  | 説明        |
| ----- | ---- | --------- |
| Regex | 文字列型 | 正規表現と一致する |


### RemoveRecipe

出力に基づいてレシピを削除します。

```zenscript
craftingTable.removeRecipe(crafttweaker.api.item.IItemStack);
craftingTable.removeRecipe(<item:minecraft:glass>);
```

| パラメータ | タイプ                                                               | 説明     |
| ----- | ----------------------------------------------------------------- | ------ |
| 出力    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | レシピの出力 |



## プロパティー

| 名称            | タイプ  | ゲッターあり | セッターあり |
| ------------- | ---- | ------ | ------ |
| commandString | 文字列型 | true   | false  |

