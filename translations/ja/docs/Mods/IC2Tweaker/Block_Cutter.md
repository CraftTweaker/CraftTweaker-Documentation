# ブロックカッター

## パッケージ

`import mods.ic2.BlockCutter;`

## メソッド

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) の入力**
- **@Optional int hardness** ブレードの最小硬度要件。

## 加算

```zenscript
mods.ic2.BlockCutter.addRecipe(IItemStack 出力, IIngredient input, @Optional int hardness default 0);

mods.ic2.BlockCutter.addRecipe(<minecraft:diamond>, <minecraft:dirt>);
```

## 削除

今のところ、 `config/ic2/block_cutter.ini` 内の対応する行を削除するだけです。