# MixRecipeBuilder

`MixRecipeBuilder` は、ゲームに High Oven's Mix Recipe をビルドし、追加するために使用されます。

## パッケージのインポート

申し訳ございませんが、パッケージをインポートするよりも安全です。

```zenscript
import mods.tcomplement.highoven.MixRecipeBuilder;
```

## `MixRecipeBuilder` を取得する

`mods.tcomplement.highoven.HighOven` ハンドラは `MixRecipeBuilder` を与えることができます。

```zenscript
// HighOven.newMixRecipe(ILiquidStack 出力, ILiquidStack input, int temp);
var builder = HighOven.newMixRecipe(<liquid:steel> * 72, <liquid:iron> * 144, 1350);
```

+ `出力` は生産する流体と量
+ `入力` は流体と消費量
+ `温度` は、ケルビンで動作するレシピのための高オーブンの最小温度です。

## 属性

| 属性     | ZenGetter | ZenSetter            | タイプ                      | 情報                        |
| ------ | --------- | -------------------- | ------------------------ | ------------------------- |
| 出力     | `出力`      | :heavy_check_mark: | `ILiquidStack`           | MixRecipe によって生成された出力     |
| input  | `input`   | :heavy_check_mark: | `ILiquidStack`           | MixRecipe の入力             |
| 温度     | `temp`    | :heavy_check_mark: | `int`                    | ケルビンの最低気温は                |
| 酸化剤    | `酸化剤`     | :x:                  | `リスト<IIngredient>` | 属性がアクセスされた時点でのレシピの有効な酸化剤は |
| レデューサー | `レデューサー`  | :x:                  | `リスト<IIngredient>` | 属性がアクセスされた時点のレシピの有効な還元器   |
| 浄化器    | `浄化器`     | :x:                  | `リスト<IIngredient>` | 属性がアクセスされた時点でのレシピの有効な浄化器  |


Methods

| 方法                                                     | 戻り値の種類             | 情報                                                      |
| ------------------------------------------------------ | ------------------ | ------------------------------------------------------- |
| `getOxidizerChance(IIngredient 酸化剤)`                   | `int`              | 酸化剤が消費される確率、酸化剤が有効でない場合 `-1`                            |
| `getReducerChance(IIngredient reducer)`                | `int`              | レデューサーが消費される確率、レデューサーが有効でない場合は `-1`                     |
| `getOxidizerChance(IIngredient purfier)`               | `int`              | 純化装置が消費される確率、酸化剤が有効でない場合 `-1`                           |
| `addOxidizer(IIngredient oxidizer, int consumeChance)` | `MixRecipeBuilder` | 与えられた確率で酸化剤を追加します (パーセント単位)                             |
| `addReducer(IIngredient reducer, int consumeChance)`   | `MixRecipeBuilder` | 与えられた確率を消費するレデューサーを追加します (パーセント単位)                      |
| `addPurifier(IIngredient purfier, int consumeChance)`  | `MixRecipeBuilder` | 与えられた確率で浄化器を追加する（パーセント単位）                               |
| `除去酸化物(成分酸化剤)`                                         | `MixRecipeBuilder` | 酸化剤が追加されている場合は、酸化剤を取り外します                               |
| `removeReducer(IIngredient reducer)`                   | `MixRecipeBuilder` | レデューサーが追加されている場合は削除します                                  |
| `除去清浄機(原料浄化機)`                                         | `MixRecipeBuilder` | 追加された場合は浄化器を削除します                                       |
| `removeAllOxidizer()`                                  | `MixRecipeBuilder` | すべての酸化剤を削除                                              |
| `removeAllReducer()`                                   | `MixRecipeBuilder` | すべてのレデューサーを削除                                           |
| `removeAllPurifier()`                                  | `MixRecipeBuilder` | すべての浄化器を削除                                              |
| `register()`                                           |                    | MixRecipeBuilder に現在追加されているデータを使用して新しい MixRecipe を追加します |


`MixRecipeBuilder` を返すすべてのメソッドは、呼び出された同じインスタンスを返し、メソッドチェーンを可能にします。

How to use Once you have a `MixRecipeBuilder`, add the oxidizers, reducers and purifiers for your new recipe to the builder, then `register()` a recipe. `MixRecipeBuilder` を使用して、好きな数のレシピを登録することができます: `register()`を呼び出すたびに。 新しいレシピを追加します関数を呼び出す時に持っている情報を含んでいます これにより、新しい添加物や収量の増加などを追加することで、レシピのバリアントやレシピ層を簡単に追加できます。

添加剤は、すべての種類の `IIngredient`をサポートしています : `IOreDictEntry`, `IItemStack` とその変換、液体コンテナなど。

Warning Don't forget to **register** your recipe, the `MixRecipeBuilder` is just a builder to specify all the parts of the recipe !