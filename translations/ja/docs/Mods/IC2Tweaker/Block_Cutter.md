# Block Cutter

## パッケージ

`import mods.ic2.BlockCutter;`

## メソッド

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**
- **@Optional int hardness** Minimum hardness requirement for blade.

## 加算

```zenscript
mods.ic2.BlockCutter.addRecipe(IItemStack output, IIngredient input, @Optional int hardness default 0);

mods.ic2.BlockCutter.addRecipe(<minecraft:diamond>, <minecraft:dirt>);
```

## 削除

For now simply remove the corresponding line in `config/ic2/block_cutter.ini`.