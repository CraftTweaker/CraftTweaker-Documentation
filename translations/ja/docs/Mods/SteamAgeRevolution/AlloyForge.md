# 合金炉

Alloy Forgeは、2つの入力流体を1つの出力流体に変換する機械です。

## パッケージ
`mods.steamagerevolution.AlloyForge`

## メソッド

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 出力** レシピの結果。
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** レシピの入力。
- **int craftTime** マシンの加工時間

## 加算

```zenscript
mods.steamagerevolution.AlloyForge.addRecipe(ILiquidStack input, ILiquidStack input, int craftTime);
mods.steamagerevolution.AlloyForge.addRecipe(<liquid:water>*100, <liquid:lava>*100, <liquid:obsidian>*200, 200);
```


## 削除

```zenscript
mods.steamagerevolution.AlloyForge.removeRecipe(ILiquidStack出力);
mods.steamagerevolution.AlloyForge.removeRecipe(<liquid:bronze>);

mods.steamagerevolution.AlloyForge.removeAll();
```
