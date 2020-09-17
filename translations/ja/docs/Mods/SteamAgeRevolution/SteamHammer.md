# スチームハンマー

SteamHammerは蒸気を使って2つの入力項目を出力項目に変換する機械です。

## パッケージ
`mods.steamagerevolution.SteamHammer`.

## メソッド

- **[IItemStack](/Vanilla/Items/IItemStack/) 出力** レシピの結果。
- **[IItemStack](/Vanilla/Items/IItemStack/) input** レシピの入力。
- **int craftTime** マシンの加工時間
- **int steamCost** 機械が処理する蒸気のコスト

## 加算

```zenscript
mods.steamer.addRecipe(IIngredient input, IIngredient input, IItemStack output, int craftTime, int steamCost);
mods.steamagerevolution.Stammer.addRecipe(<ore:ingotIron>, <ore:ingotIron>, <ore:plateIron>.Itemfirst, 200, 200);
```


## 削除

```zenscript
mods.steamer.removeRecipe(IItemStack 出力);
mods.steamer.removeRecipe(<ore:plateIron>.firstItem);

mods.steamagerevolution.Steamer.removeAll();
```
