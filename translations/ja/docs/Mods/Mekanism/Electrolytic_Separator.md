# 電解セパレーター

Mekanism 9.7.0 以降、コマンド `/ct meckrecipes separator` を使用して、電解セパレータのすべてのレシピ文字列を表示できるようになりました。

## 加算

```zenscript
mods.mekanism.separator.addRecipe(ILiquidStack inputFluid, double inputRF, IGasStack outputGas1, IGasStack outputGas2);

mods.mekanism.separator.addRecipe(<liquid:liquidfusionfuel>, 5000, <gas:deuterium>, <gas:tritium>);
```

## 削除

```zenscript
mods.mekanism.separator.removeRecipe(IIngredient inputFluid, @Optional IIngredient outputGas1, @Optional IIngredient outputGas2);

mods.mekanism.separator.removeRecipe(<liquid:heavywater>, <gas:deuterium>, <gas:oxygen>);
mods.mekanism.separator.removeRecipe(<liquid:water>);
```

出力パラメータを指定すると、その入力から出力される特定のレシピのみが削除されます。 出力パラメータを省略すると、入力項目が生成できるすべてのレシピが削除されます。

## すべてのレシピを削除する

Mekanism9.7.0以降、すべての電解セパレータレシピを削除することが可能になりました。 （CraftTweaker経由で追加されたレシピは除外されます）

```zenscript
mods.mekanism.separator.removeAllRecipes();
```