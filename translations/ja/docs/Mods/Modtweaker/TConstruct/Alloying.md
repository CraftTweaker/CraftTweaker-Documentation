# 合金化

`合金` パッケージでは、合金のレシピを追加または削除できます。

## 発信中

`mods.tconstruct.Alloy` を使用して、Alloy パッケージを呼び出すことができます。

## 合金レシピを追加

```zenscript
//mods.tconstruct.Alloy.addRecipe(ILiquidStack出力, ILiquidStack[] inputs);
mods.tconstruct.Alloy.addRecipe(<liquid:water> * 10, [<liquid:lava> * 10, <liquid:molten_iron> * 5]);
```

## 合金レシピを削除

```zenscript
//mods.tconstruct.Alloy.removeRecipe(ILiquidStack 出力);
mods.tconstruct.Alloy.removeRecipe(<liquid:water>);

//mods.tconstruct.Alloy.removeRecipe(ILiquidStack 出力, ILiquidStack[] 入力);
mods.tconstruct.Alloy.removeRecipe(<liquid:water>, [<liquid:lava>, <liquid:molten_iron>]);
```