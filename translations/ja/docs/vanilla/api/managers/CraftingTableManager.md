# CraftingTableManager



crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.CraftingTableManager
```

## 実装されたインターフェース
CraftingTableManagerは、以下のインターフェースを実装しています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [crafttweaker.api.registrries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## メソッド
### addJSONRecipe

提供されたIDataに基づいてレシピを追加します。 提供されたIDataはDataPack JSONを表し、IRecipeTypeシステムをサポートするDataPackのレシピを効果的に登録することができます。

```zenscript
craftingTable.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
craftingTable.addJSONRecipe("recipe_name", {item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| パラメータ | タイプ                                                    | 説明             |
| ----- | ------------------------------------------------------ | -------------- |
| name  | 文字列型                                                   | レシピの名前         |
| データ   | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | jsonファイルを表すデータ |


### addShaped

作成テーブルに形状のレシピを追加します

```zenscript
craftingTable.addShaped(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[][], recipeFunction as com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix);
craftingTable.addShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]]);
craftingTable.addShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| パラメータ          | タイプ                                                                          | 説明                                                                                             | IsOptional | デフォルト値 |
| -------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------- | ------ |
| レシピ名           | 文字列型                                                                         | 追加するレシピの名前                                                                                     | false      | null   |
| 出力             | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)            | output IItemStack                                                                              | false      | null   |
| 材料             | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[][]      | 入力に対するIIngredient配列の配列                                                                         | false      | null   |
| recipeFunction | com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix | オプションのcom.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix より高度な条件のための | true       | null   |


### addShapedMirrored

鏡像のレシピをクラフトテーブルに追加します

```zenscript
craftingTable.addShapedMirrored(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[][], recipeFunction as com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix);
craftingTable.addShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]]);
craftingTable.addShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| パラメータ          | タイプ                                                                          | 説明                                                                                             | IsOptional | デフォルト値 |
| -------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------- | ------ |
| レシピ名           | 文字列型                                                                         | 追加するレシピの名前                                                                                     | false      | null   |
| 出力             | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)            | output IItemStack                                                                              | false      | null   |
| 材料             | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[][]      | 入力に対するIIngredient配列の配列                                                                         | false      | null   |
| recipeFunction | com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix | オプションのcom.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix より高度な条件のための | true       | null   |


### addShapeless

クラフトテーブルにシェイプレスのレシピを追加します

```zenscript
craftingTable.addShapeless(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[], recipeFunction as com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionArray);
craftingTable.addShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>]);
craftingTable.addShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>], (usualOut as IItemStack, inputs as IItemStack[]) => {if(inputs[0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| パラメータ          | タイプ                                                                         | 説明                                                                                         | IsOptional | デフォルト値 |
| -------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ---------- | ------ |
| レシピ名           | 文字列型                                                                        | 追加するレシピの名前                                                                                 | false      | null   |
| 出力             | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)           | output IItemStack                                                                          | false      | null   |
| 材料             | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[]       | 入力に対するIIngredientの配列                                                                       | false      | null   |
| recipeFunction | com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionArray | 任意のcom.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionArray より高度な条件のための | true       | null   |


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



