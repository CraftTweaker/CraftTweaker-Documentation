# MixRecipeManager

`MixRecipeManager` は、ModTweaker によって追加されたものを含む、既存の高オーブンミックスレシピを変更するために使用されます。

## パッケージのインポート

申し訳ございませんが、パッケージをインポートするよりも安全です。

```zenscript
import mods.tcomplement.highoven.MixRecipeManager;
```

## `MixRecipeManager` を取得する

`HighOven` ハンドラは `MixRecipeManager` を与えることができます:

```zenscript
// HighOven.manageMixRecipe(ILiquidStack 出力, ILiquidStack input);
var manager = HighOven.manageMixRecipe(<liquid:steel>);
```

+ `出力` は変更するミックスレシピの出力
+ `input` (オプション)は、変更するミックスレシピの入力である。 `null` または指定されていない場合、出力を生成するミックスレシピは影響を受けます

## 添加物を削除する

`MixRecipeManager` を使用して、影響を受けるミックスレシピから特定の添加物を削除できます。 注意してください, 削除は常に強制されているため. つまり、削除した添加剤を添加する方法は何であれ防止されます。

これはオレディクトのエントリで驚くべき結果が得られるかもしれません。 オレディクトエントリはミックスレシピにそのまま追加されるので( `IItemStack` のリストには展開されませんが、レシピを確認するときに探されます)。 項目を削除すると、それが属するすべてのオレディクトエントリをブロックします。

Generally speaking, if you remove something specific (say, an `IItemStack` with transformers) but an (single) additive addition would allow what you removed plus some other things (say, a more generic `IItemStack`), the whole addition will be cancelled, preventing said other things from being accepted by the High Oven.

| 方法                                   | 情報                               |
| ------------------------------------ | -------------------------------- |
| `除去酸化物(成分酸化剤)`                       | 影響を受けるMixRecipeから酸化剤を前もって削除します   |
| `removeReducer(IIngredient reducer)` | 影響を受けるMixRecipeからレデューサーを前もって削除する |
| `除去浄化器(原材料還元器)`                      | 影響を受けるMixRecipeから浄化器を前もって取り外します  |


これらのすべてのメソッドは、メソッドチェーンを可能にするために、呼び出された同じインスタンスを返します。

## 既存の MixRecipe に添加物を追加する

`MixRecipeManager` にマッチしたすべてのミックスレシピに添加剤を追加できます。 削除には優先度があります(上記参照)。

| 方法                                                              | 情報                                 |
| --------------------------------------------------------------- | ---------------------------------- |
| `addOxidizer(@NotNull IIngredient oxidizer, int consumeChance)` | 酸化剤を指定された確率で追加する（パーセント単位）          |
| `addReducer(@NotNull IIngredient reducer, int consmeChance)`    | 指定された確率を消費するレデューサーを追加します (パーセント単位) |
| `addPurifier(@NotNull IIngredient purfier, int consumeChance)`  | 指定された量の浄化器を消費する確率を追加します (パーセント単位)  |


これらのすべてのメソッドは、メソッドチェーンを可能にするために、呼び出された同じインスタンスを返します。

## 警告

任意のミックスレシピと一致しない `MixRecipeManager` を作成しても警告は発生しません。 なぜなら、どのミックスレシピが追加されるかを判断する方法がないからです(ミックスレシピ登録の前にスクリプトの解析が行われます)。 `MixRecipeManager` に効果がない場合は、まずミックスレシピと一致するか確認してください。