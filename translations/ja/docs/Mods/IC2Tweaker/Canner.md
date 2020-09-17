# キャナー

## パッケージ

`import mods.ic2.Canner;`

## メソッド

- **[IItemStack](/Vanilla/Items/IItemStack/) 出力** 製品
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) コンテナ** "塗りつぶされる成分"
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) フィラー** 容器に埋め込まれた成分。

## ボトルレシピを追加

```zenscript
mods.ic2.Canner.addBottleRecipe(IItemStack 出力, IIngredient container, IIngredient filler);

mods.ic2.Canner.addBottleRecipe(<minecraft:water_bucket>, <minecraft:bucket>, <minecraft:ice>);
```

## エンリッチレシピを追加

```zenscript
mods.ic2.Canner.addEnrichRecipe(ILiquidStack 出力, ILiquidStack input, IIngredient additive);

mods.ic2.Canner.addEnrichRecipe(<liquid:lava> * 1000, <liquid:water> * 1000, <minecraft:redstone>);
```