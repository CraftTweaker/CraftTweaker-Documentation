# 製鋼所

Refineryは、熱を使用して入力流体を2つ以上の出力流体に変換するマルチブロック構造です。 マルチブロックは2~4個の精製ブロックで構成されています 可能な出力流体の数は構造内の精製ブロックの数によって制限されます

空圧クラフトより前: すべての精製レシピの最小温度(すなわち、プロセス開始時の温度)は常に373K、または100°Cでした。 しかし、v0.9.0以降では、精製レシピを追加する際の最低気温を指定することができます。

精製所は、レシピの最低温度で液体の処理を開始し、温度が上昇するとより速く動作します。

出力数が異なる限り、同じ入力を持つレシピを 2 つ以上持つことが可能であることに注意してください。 この場合、最も可能な出力を生成するレシピ(マルチブロック内の精製ブロックの数を考える)が使用されます。

## 発信中

`mods.empaticcraft.refinery` を使って、製錬所パッケージを呼び出すことができます。

## 削除中

この関数は、与えられた [IIngredient](/Vanilla/Variable_Types/IIngredient/) `出力` のすべてに一致する最初のレシピを削除します。

```zenscript
mods.emeraticcraft.finery.removeRecipe(IIngredient[] outputs);
```

この関数は、与えられた [IIngredient](/Vanilla/Variable_Types/IIngredient/) `入力` に一致する最初のレシピを削除します。

```zenscript
mods.emeraticcraft.finery.removeRecipes(IIngredient input);
```

この機能は *製鋼所のレシピを* 削除します。

```zenscript
mods.emeraticraft.finery.removeAllRecipes();
```

## 追加中

これらの機能は合金鉱山に新しいレシピを追加します。

```zenscript
// Add a recipe with the default minimum temperature of 373K (100°C)
mods.pneumaticcraft.refinery.addRecipe(ILiquidStack input, ILiquidStack[] outputs);

// (v0.9.0+ required) Add a recipe with a given minimum temperature
mods.pneumaticcraft.refinery.addRecipe(int minimumTemperature, ILiquidStack input, ILiquidStack[] outputs);


// Example: both recipes use water as input
// First recipe will be used in a 2-block refinery
mods.pneumaticcraft.refinery.addRecipe(<liquid:water> * 10, [<liquid:lava> * 2, <liquid:oil> * 5]);
// Second recipe will be used in a 3- or 4-block refinery,
// and also requires a minimum temperature of 473K, or 200°C
mods.pneumaticcraft.refinery.addRecipe(473, <liquid:water> * 10, [<liquid:lava> * 2, <liquid:oil> * 5, <liquid:lpg> * 2]);
```