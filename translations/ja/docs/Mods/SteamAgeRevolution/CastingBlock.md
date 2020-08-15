# キャストブロック

鋳造ブロックは、入力流体を出力項目に変換する機械です。

## パッケージ
`mods.steamagerevolution.CastingBlock`

## メソッド

- **[IItemStack](/Vanilla/Items/IItemStack/) 出力** レシピの結果。
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** レシピの入力。
- **int craftTime** マシンの加工時間

## 加算

```zenscript
mods.steamagerevolution.CastingBlock.addRecipe(ILiquidStack input, IItemStack output, int craftTime);
mods.steamagerevolution.CastingBlock.addRecipe(<liquid:lava>*1000, <minecraft:obsidian>, 200);
```

## 削除

```zenscript
mods.steamagerevolution.CastingBlock.removeRecipe(IItemStack output);
mods.steamagerevolution.CastingBlock.removeRecipe(<minecraft:iron_block>);

mods.steamagerevolution.CastingBlock.removeAll();
```
