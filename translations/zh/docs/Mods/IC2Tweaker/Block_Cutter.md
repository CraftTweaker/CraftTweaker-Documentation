# Block Cutter

## 所属包名

`import mods.ic2.BlockCutter;`

## 方法

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**
- **@Optional int hardness** Minimum hardness requirement for blade.

## 添加配方

```zenscript
mods.ic2.BlockCutter.addRecipe(IItemStack output, IIngredient input, @Optional int hardness default 0);

mods.ic2.BlockCutter.addRecipe(<minecraft:diamond>, <minecraft:dirt>);
```

## 移除

For now simply remove the corresponding line in `config/ic2/block_cutter.ini`.