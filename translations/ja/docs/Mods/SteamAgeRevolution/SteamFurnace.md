# 蒸気炉

蒸気炉は、蒸気を用いて入力項目を出力項目に変換する機械です。

## パッケージ
`mods.steamagerevolution.SteamFurnace`

## メソッド

- **[IItemStack](/Vanilla/Items/IItemStack/) 出力** レシピの結果。
- **[IItemStack](/Vanilla/Items/IItemStack/) input** レシピの入力。
- **int craftTime** マシンの加工時間
- **int steamCost** 機械が処理する蒸気のコスト

## 加算

```zenscript
mods.steamagerevolution.SteamFurnace.addRecipe(IIngredient input, IItemStack output, int craftTime, int steamCost);
mods.steamagerevolution.StamFurnace.addRecipe(<ore:cobblestone>, <minecraft:stone>, 200, 200);
```


## 削除

```zenscript mods.steamagerevolution.SteamFurnace.removeRecipe(IItemStack output); mods.steamagerevolution.SteamFurnace.removeRecipe(<minecraft:glass>);

mods.steamagerevolution.SteamFurnace.removeAll(); ``
