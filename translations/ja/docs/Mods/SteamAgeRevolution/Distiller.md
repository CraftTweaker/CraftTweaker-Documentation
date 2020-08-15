# 蒸留器

蒸留器は、蒸気を用いて入力流体を出力流体とアイテムに変換する機械です。

## パッケージ
`mods.steamagerevolution.Distiller`

## メソッド

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 出力** レシピの結果。
- **[IItemStack](/Vanilla/Items/IItemStack/) 出力** レシピの結果。
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** レシピの入力。
- **int craftTime** マシンの加工時間
- **int steamCost** 機械が処理する蒸気のコスト

## 加算

```zenscript
mods.steamagerevolution.Distiller.addRecipe(ILiquidStack input, IItemStack outputStack, ILiquidStack outputStack, int craftTime, int steamCost);
mods.steamagerevolution.Distiller.addRecipe(<liquid:bio_fuel>*1000, <minecraft:dirt>, <liquid:ethanol>*1000, 200, 200);
```

## 削除

```zenscript mods.steamagerevolution.Distiller.removeRecipe(IItemStack outputStack, ILiquidStack output); mods.steamagerevolution.Distiller.removeRecipe(<minecraft:cobblestone>, <liquid:lava>);

mods.steamagerevolution.Distiller.removeAll(); ``
