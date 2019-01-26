# Block Cutter

## Package
`import mods.ic2.BlockCutter;`

## Methods

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **IIngredient input**
- **@Optional int hardness** Minimum hardness requirement for blade.

## Addition

```
mods.ic2.BlockCutter.addRecipe(IItemStack output, IIngredient input, @Optional int hardness default 0);

mods.ic2.BlockCutter.addRecipe(<minecraft:diamond>, <minecraft:dirt>);
```

## Removal

For now simply remove the corresponding line in `config/ic2/block_cutter.ini`.
