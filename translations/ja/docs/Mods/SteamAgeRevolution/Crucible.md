# るつぼ可能

るつぼは、蒸気を用いて入力項目を出力流体に変換する機械です。

## パッケージ
`mods.steamagerevolution.Crucable`

## メソッド

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 出力** レシピの結果。
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** レシピの入力。
- **int craftTime** マシンの加工時間
- **int steamCost** 機械が処理する蒸気のコスト

## 加算

```zenscript
mods.steamagerevolution.Crucible.addRecipe(IIngredient input, ILiquidStack output, int craftTime, int steamCost);
mods.steamagerevolution.Crucible.addRecipe(<minecraft:obsidian>, <liquid:lava>*1000, 200, 200);
```

## 削除

```zenscript
mods.steamagerevolution.Crucible.removeRecipe(ILiquidStack);
mods.steamagerevolution.Crucible.removeRecipe(<liquid:lava>);

mods.steamagerevolution.Crucible.removeAll();
```
