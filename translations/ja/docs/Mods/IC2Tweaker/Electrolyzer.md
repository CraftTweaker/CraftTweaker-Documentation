# エレクトロライザー

## パッケージ

`import mods.ic2.Electrolyzer;`

## メソッド

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/)は** 出力するすべての出力の配列。 各スロットは、Down-Up-North-North-South-West-East方向に対応しています。 末尾の null は省略できます。
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** The input
- **int power** Power consumption, measured in EU/tick
- **@Optional int time** Time cost. 指定されていない場合は200まで設定してください。

## 加算

```zenscript
mods.ic2.Electrolyzer.addRecipee(ILiquidStack[] outputs, ILiquidStack input, int power, @Optional int time);

mods.ic2.Electrolyzer.addRecipe([<liquid:lava> * 1000, <liquid:water> * 500, null, null, null, null], <liquid:water> * 1000, 30);
```