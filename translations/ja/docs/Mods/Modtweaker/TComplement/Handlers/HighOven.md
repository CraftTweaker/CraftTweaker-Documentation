# HighOven

HighOvenパッケージは、燃料を追加/削除し、レシピを加熱し、高オーブンにレシピをミックスすることができます。

## パッケージのインポート

パッケージをインポートするには

```zenscript
import mods.tcomplement.highoven.HighOven;
```

## 燃料

高オーブンで受け入れられる燃料を加えて取り除くことができます。

### 燃料の削除

```zenscript
// HighOven.removeFuel(IIngredient fuel);
HighOven.removeFuel(<minecraft:coal:1>);
```

### 燃料の追加

```zenscript
// HighOven.addFuel(IIngredient fuel, int time, int rate);
HighOven.addFuel(<minecraft:hay_block>, 3600, 5);
```

+ `燃料` は追加する燃料です(トランス、NBT、流体容器をサポートしています)
+ `時間` は燃料がどのくらい持続するかを秒単位で表します。
+ `速度` は、燃料を使用した場合のオーブンの温度上昇を秒単位で表します。

## 溶融オーバーライド

融解オーバーライドを追加および削除することができます。 融解はオーバーライドされますが、High Ovenのデフォルトの融解動作をオーバーライドします。 アイテムは通常、製錬所と同じように動作し、オーバーライドは出力流体と融解温度を再定義することができます(High Ovenの場合のみ)。

### 上書きを削除する

```zenscript
// HighOven.removeMeltingOverride(ILiquidStack output, @Optional IItemStack input)
HighOven.removeMeltingOverride(<liquid:iron>);
```

### オーバーライドの追加

これはもっと面白い。 オーバーライドは、High Oven 内のアイテムの新しい動作を指定します。

```zenscript
// HighOven.addMeltingOverride(ILiquidStack output, IIngredient input, @Optional int temp)
HighOven.addMeltingOverride(<liquid:steel> * 144, <ore:ingotIron>, 2567);
```

+ `` 液体と生成量
+ `` を精錬するIIngredientを入力します。 変圧器、オレディクトなどをサポートします。
+ `temp` (オプション)ケルビンのHigh Ovenで溶融を開始するための最低温度。 未定義の場合は、計算を高オーブンに任せてください

## 熱のレシピ

熱レシピは、高オーブンタンクに別の流体を変換します, 高オーブンの温度が十分に高く提供されます.

### ヒートレシピを削除する

```zenscript
// HighOven.removeHeatRecipe(ILiquidStack 出力, @Optional ILiquidStack input);
HighOven.removeHeatRecipe(<liquid:steam>);
```

+ `出力` はレシピを無効にする出力です
+ `入力` はレシピをフィルタリングするためのオプションです。 指定されていない場合 (または `null`)、与えられた出力を生成するすべてのレシピは無効になります。 そうでなければ、指定された入力を持つレシピのみが無効になります。

*注意*: この方法は **次の方法でModTweakerが追加した熱レシピを無効に** しません。

### 加熱レシピの追加

```zenscript
// HighOven.addHeatRecipe(ILiquidStack output, ILiquidStack input, int temp);
HighOven.addHeatRecipe(<liquid:iron> * 144, <liquid:lava> * 1000, 1450);
```

+ `` を液体からプルードス、およびその量
+ `` 消費する液体、および出力量を生成する量
+ `温度` は、ケルビンにおける最低高オーブンの温度である。

*注*: 熱レシピの実際の速度は過剰な温度でスケールする

## ミックスレシピ

ミックスのレシピは、錬金術や合金の一種を行うことができます。 スタックが高オーブンで溶けると、適切な流体 *と* 適切な酸化剤が生成される場合。 リデューサーと浄化器は専用のスロットにあり、それから別の流体が生成されます。

それらのレシピは複雑なので、既存のレシピを追加または調整することは特別なzenクラスを使用します。

### ミックスレシピを削除する

ミックスレシピのための簡単な部分です

```zenscript
// HighOven.removeMixRecipe(ILiquidStack出力, @Optional ILiquidStack input);
HighOven.removeMixRecipe(<liquid:steel>); // 任意の鉄鋼生産ミックスレシピを無効にする
```

引数は `removeHeatRecipe()` と同じで、マッチングは同じように動作します。 `removeHeatRecipe()`と同様に、このメソッドはModTweakerによって追加されたレシピを削除しません。

### ミックスレシピの追加

ミックスレシピを追加するには、 `MixRecipeBuilder` を使用する必要があります。 You can get one using

```zenscript
import mods.tcomplements.highoven.MixRecipeBuilder;

// HighOven.newMixRecipe(ILiquidStack output, ILiquidStack input, int temp);
var builder = HighOven.newMixRecipe(<liquid:steel> * 72, <liquid:iron> * 144, 1350);
```

+ `出力` は生産する流体と量
+ `入力` は流体と消費量
+ `温度` は、ケルビンで動作するレシピのための高オーブンの最小温度です。

`MixRecipeBuilder`を入手したら、酸化剤、レデューサー、浄化器を追加して登録する必要があります。

```zenscript
builder.addOxidizer(<minecraft:redstone>, 95);
builder.addReducer(<minecraft:glowstone>, 5);
builder.addPurifier(<ore:dustCoal>, 50);
builder.addPurifier(<minecraft:nether_star>, 0);
builder.register();
```

`MixRecipeBuilder`でできることの詳細なドキュメントについては、そのドキュメントを参照してください。

注*: `MixRecipeBuilder`を使用すると、変更を続けて再利用できます。 レシピのバリエーションを簡単に追加できます。

**警告**: 製錬所で溶解したときに入力液が生成されない場合、レシピはJEIでは表示されません。

### ミックスレシピの微調整

既存のミックスレシピ (**を含む** ModTweakerによって追加されたものを含む) を変更するには、 `MixRecipeManager` を使用できます。

```zenscript
import mods.tcomplement.highoven.MixRecipeManager;

// HighOven.manageMixRecipe(ILiquidStack output, ILiquidStack input);
var manager = HighOven.manageMixRecipe(<liquid:steel>);
```

いつものように、入力を指定しない(または `null`を指定すると、すべての入力が受け入れられるワイルドカードの動作になります。

Once you have a `MixRecipeManager` representing a particular set of mix recipe, you can prevent certain oxidizer/reducers/purifiers from being added to those recipes, *or* try to add new additives. 削除は追加を優先します。

```zenscript
manager.removeOxidizer(<minecraft:redstone>);
manager.addPurifier(<minecraft:dirt>, 25);
```

行動は時々少しsurpring かもしれない。 添加物を無効にすると、無効にする添加物はキャンセルされます。 For instance, if you add a bunch of items using a single `OreDictEntry`, then try to remove a specific `IItemStack`, it will prevent the entry from being added.

これは、反復的に、 `OreDictEntry` がそのまま追加され、個々の項目に変換されないためです。 禁止する `ItemStack` を無効にする唯一の方法は、エントリ全体が登録されないようにすることです。 そうでなければエントリは項目を許可します

実際にいくつかの項目を除いて、oredict 項目を追加したい場合。 `OreDictEntry` の内容を繰り返し、特定の項目を削除する(または最初に追加しない)ことで、手動で行う必要があります。