# 発酵器

## パッケージ

`import mods.ic2.Fermenter;`

## メソッド

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 出力** 発酵流体。
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** The input fluid
- **int熱** 発酵に必要な熱量

## 加算

```zenscript
mods.ic2.Fermenter.addRecipe(ILiquidStack出力, ILiquidStack入力, int heat);

mods.ic2.Fermenter.addRecipe(<liquid:lava> * 1000, <liquid:water> * 2000, 23333);
```